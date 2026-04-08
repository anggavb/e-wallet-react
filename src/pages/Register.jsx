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

const Register = () => {
  usePageTitle("Register");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    console.log(email, password, confirmPassword);

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const credentials = JSON.parse(localStorage.getItem("credentials") || "[]");

    if (credentials.some((cred) => cred.email === email)) {
      alert("Email already registered!");
      return;
    }

    const name = email.split("@")[0];
    credentials.push({ email, password, name });
    localStorage.setItem("credentials", JSON.stringify(credentials));

    alert("Registration successful! You can now log in.");

    // Redirect to admin page after registration
    navigate("/", { replace: true });
  };

  return (
    <AuthLayout
      imageSrc="/3d-hand-making-cashless-payment-from-smartphone 1 copy.png"
      imageAlt="3D Hand holding a wallet"
    >
      <AuthHeader
        title="Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"
        subtitle="Transfering money is easier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"
      />

      <div className="flex flex-col gap-4 mt-2">
        <SocialButton
          icon={<GoogleIcon />}
          onClick={() => navigate("/admin", { replace: true })}
        >
          Sign In With Google
        </SocialButton>
        <SocialButton
          icon={<FacebookIcon />}
          onClick={() => navigate("/admin", { replace: true })}
        >
          Sign In With Facebook
        </SocialButton>
      </div>

      <div className="flex items-center gap-4 text-[0.85rem] text-gray-500 my-2 before:content-[''] before:flex-1 before:border-b before:border-neutral-200 after:content-[''] after:flex-1 after:border-b after:border-neutral-200">
        <span>Or</span>
      </div>

      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <InputField
          id="email"
          type="email"
          label="Email"
          name="email"
          placeholder="Enter Your Email"
          iconLeft={<MailIcon />}
          required
        />

        <InputField
          id="password"
          name="password"
          label="Password"
          placeholder="Enter Your Password"
          iconLeft={<PasswordIcon />}
          isPassword
          required
        />

        <InputField
          id="confirm-password"
          label="Confirm Password"
          name="confirm-password"
          placeholder="Enter Your Password Again"
          iconLeft={<PasswordIcon />}
          isPassword
          required
        />

        <Button type="submit">Register</Button>
      </form>

      <nav className="mt-2 text-[0.95rem] text-center text-gray-500 flex flex-col gap-1.5 sm:mt-4">
        <p>
          Have An Account?{" "}
          <a
            href="/"
            className="font-semibold transition-colors text-blue-700 hover:underline"
          >
            Login
          </a>
        </p>
      </nav>
    </AuthLayout>
  );
};

export default Register;
