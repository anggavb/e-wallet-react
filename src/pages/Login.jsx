import { useNavigate } from "react-router";

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

const Login = () => {
  usePageTitle("Login");

  const navigate = useNavigate();
  const goToDashboard = () => {
    localStorage.setItem(
      "credentials",
      JSON.stringify({
        name: "Angga Vb",
        email: "anggavb8@gmail.com",
      }),
    );
    navigate("/admin", { replace: true });
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
        <SocialButton icon={<GoogleIcon />} onClick={() => goToDashboard()}>
          Sign In With Google
        </SocialButton>
        <SocialButton icon={<FacebookIcon />} onClick={() => goToDashboard()}>
          Sign In With Facebook
        </SocialButton>
      </div>

      <div className="flex items-center gap-4 text-[0.85rem] text-gray-500 my-2 before:content-[''] before:flex-1 before:border-b before:border-neutral-200 after:content-[''] after:flex-1 after:border-b after:border-neutral-200">
        <span>Or</span>
      </div>

      <form action="#" method="POST" className="flex flex-col gap-4">
        <InputField
          id="email"
          type="email"
          label="Email"
          placeholder="Enter Your Email"
          iconLeft={<MailIcon />}
          required
        />

        <InputField
          id="password"
          label="Password"
          placeholder="Enter Your Password"
          iconLeft={<PasswordIcon />}
          isPassword
          required
        />

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
