import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router";
import { useForm } from "react-hook-form";

import { AuthMiddleLayout } from "@components/templates";
import { AuthHeader } from "@components/organisms";
import { InputField } from "@components/molecules";
import { Button } from "@components/atoms";
import { PasswordIcon } from "@components/atoms/icons";
import { usePageTitle } from "@hooks";

import { usersAction } from "@redux/slices/userRegistered";

const ResetPassword = () => {
  usePageTitle("Reset Password");
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const { users } = useSelector((state) => state.users);
  const handleResetPassword = (form) => {
    const email = searchParams.get("email");
    const userIndex = users.findIndex((user) => user.email === email);
    if (userIndex !== -1) {
      // Update password in the store (this is a mock, in real app should call API)
      dispatch(
        usersAction.updatePassword({
          id: users[userIndex].id,
          password: form.newPassword,
        }),
      );
      reset();
      toast.success("Password has been reset successfully!");
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1500);
    } else {
      toast.error("User not found");
    }
  };
  return (
    <AuthMiddleLayout>
      <AuthHeader
        title="Reset Password 👋"
        subtitle="Enter your email to reset your password."
      />

      <form
        onSubmit={handleSubmit(handleResetPassword)}
        className="flex flex-col gap-4 mt-2"
      >
        <InputField
          {...register("newPassword", {
            required: "New password is required",
          })}
          name="newPassword"
          id="new-password"
          label="New Password"
          placeholder="Enter Your New Password"
          iconLeft={<PasswordIcon />}
          isPassword
          noValidate
        />
        {errors.newPassword && (
          <p className="text-sm text-red-500 mt-1">
            {errors.newPassword.message}
          </p>
        )}

        <InputField
          {...register("confirmPassword", {
            required: "Please confirm your new password",
            validate: (value) =>
              value === getValues().newPassword || "Passwords do not match",
          })}
          name="confirmPassword"
          id="confirm-password"
          label="Confirm New Password"
          placeholder="Re-Type Your New Password"
          iconLeft={<PasswordIcon />}
          isPassword
          noValidate
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500 mt-1">
            {errors.confirmPassword.message}
          </p>
        )}

        <Button type="submit">Submit</Button>
      </form>

      <nav className="mt-2 text-[0.95rem] text-center text-gray-500 sm:mt-4">
        <p>
          Already remember?{" "}
          <a
            href="/login"
            className="font-semibold transition-colors text-blue-700 hover:underline"
          >
            Login
          </a>
        </p>
      </nav>
    </AuthMiddleLayout>
  );
};

export default ResetPassword;
