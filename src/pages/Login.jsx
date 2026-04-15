import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { AuthLayout } from "@components/templates";
import { AuthHeader } from "@components/organisms";
import { InputField, SocialButton } from "@components/molecules";
import { Button } from "@components/atoms";
import {
  GoogleIcon,
  FacebookIcon,
  MailIcon,
  PasswordIcon,
} from "@components/atoms/icons";
import { usePageTitle } from "@hooks";
import { userLoginAction } from "@redux/slices/userLogin";

const Login = () => {
  usePageTitle("Login");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogin = (data) => {
    if (users && users.length) {
      const user = users.find(
        (user) => user.email === data.email && user.password === data.password,
      );

      dispatch(userLoginAction.login(user));
      navigate("/admin", { replace: true });
      toast.success("Login successful!");
      return;
    }

    toast.error("Invalid email or password");
  };

  return (
    <AuthLayout
      imageSrc="/3d-hand-making-cashless-payment-from-smartphone 1.png"
      imageAlt="3D Hand holding a wallet"
    >
      <AuthHeader
        title="Hello Welcome Back 👋"
        subtitle="Fill out the form correctly or you can login with several options."
      />

      <div className="flex flex-col gap-4 mt-2">
        <SocialButton icon={<GoogleIcon />}>Sign In With Google</SocialButton>
        <SocialButton icon={<FacebookIcon />}>
          Sign In With Facebook
        </SocialButton>
      </div>

      <div className="flex items-center gap-4 text-[0.85rem] text-gray-500 my-2 before:content-[''] before:flex-1 before:border-b before:border-neutral-200 after:content-[''] after:flex-1 after:border-b after:border-neutral-200">
        <span>Or</span>
      </div>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col gap-4"
        noValidate
      >
        <InputField
          {...register("email", {
            required: true,
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          id="email"
          type="email"
          name="email"
          label="Email"
          placeholder="Enter Your Email"
          iconLeft={<MailIcon />}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">
            {errors.email.message || "Email is required"}
          </span>
        )}

        <InputField
          {...register("password", { required: true })}
          id="password"
          name="password"
          label="Password"
          placeholder="Enter Your Password"
          iconLeft={<PasswordIcon />}
          isPassword
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message || "Password is required"}
          </span>
        )}

        <Button type="submit">Login</Button>
      </form>

      <nav className="mt-2 text-[0.95rem] text-center text-gray-500 flex flex-col gap-1.5 sm:mt-4">
        <p>
          Not Have An Account?{" "}
          <a
            href="/register"
            className="font-semibold transition-colors text-blue-700 hover:underline"
          >
            Register
          </a>
        </p>
        <p>
          Or Forgot Your Password?{" "}
          <a
            href="/forgot-password"
            className="font-semibold transition-colors text-blue-700 hover:underline"
          >
            Click Here
          </a>
        </p>
      </nav>
    </AuthLayout>
  );
};

export default Login;
