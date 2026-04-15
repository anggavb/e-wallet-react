import { InputField } from "@components/molecules";
import { Button } from "@components/atoms";
import { ProfileIcon, PasswordIcon } from "@components/atoms/icons";

const ProfileChangePassword = () => {
  return (
    <main className="page-main md:col-span-1 lg:col-span-2">
      <div className="mb-4 page-header">
        <h2 className="flex items-center gap-2 text-base font-semibold text-blue-700 sm:text-[1.2rem] sm:gap-3">
          <ProfileIcon className="stroke-gray-600" />
          Profile
        </h2>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col gap-6 p-4 bg-white border border-neutral-200 rounded-xl sm:p-6 lg:p-8 lg:gap-8 shadow-sm">
          <h3 className="text-[1.1rem] sm:text-[1.2rem] font-bold text-neutral-800 border-b border-neutral-200 pb-3 sm:pb-4 mb-2">
            Change Password
          </h3>

          <form
            action="#"
            method="POST"
            className="flex flex-col gap-5 sm:gap-6 w-full max-w-full"
          >
            <InputField
              id="existing-password"
              label="Existing Password"
              placeholder="Enter Your Existing Password"
              iconLeft={<PasswordIcon />}
              isPassword
              required
            />

            <InputField
              id="new-password"
              label="New Password"
              placeholder="Enter Your New Password"
              iconLeft={<PasswordIcon />}
              isPassword
              required
            />

            <InputField
              id="confirm-password"
              label="Confirm New Password"
              placeholder="Re-Type Your New Password"
              iconLeft={<PasswordIcon />}
              isPassword
              required
            />

            <Button
              type="submit"
              className="w-full sm:w-auto px-8 mt-2 py-3.5 ml-auto"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ProfileChangePassword;
