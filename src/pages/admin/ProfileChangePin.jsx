import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Button } from "@components/atoms";
import { PinInput } from "@components/molecules";
import { ProfileIcon } from "@components/atoms/icons";
import { usePageTitle } from "@hooks";

import { userLoginAction } from "@redux/slices/userLogin";
import { usersAction } from "@redux/slices/userRegistered";

function ProfileChangePin() {
  usePageTitle("Change Pin");
  const [pin, setPin] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user: userLoggedIn } = useSelector((state) => state.userLogin);

  const handlePinChange = (pinChange) => {
    setPin(pinChange);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.length === 6) {
      dispatch(usersAction.updatePin({ id: userLoggedIn.id, pin }));
      dispatch(userLoginAction.updated({ ...userLoggedIn, pin }));
      toast.success("Pin set successfully!");
      setPin("");
      setTimeout(() => {
        navigate("/admin/profile");
      }, 1000);
      return;
    }
    toast.error("Pin must be 6 digits long");
  };
  return (
    <main className="page-main md:col-span-1 lg:col-span-2">
      <div className="mb-4 page-header">
        <h2 className="flex items-center gap-2 text-base font-semibold text-blue-700 sm:text-[1.2rem] sm:gap-3">
          <ProfileIcon className="stroke-gray-600" />
          Profile
        </h2>
      </div>

      <section>
        <div className="text-center justify-center p-4 bg-gray-50 border border-neutral-200 sm:p-6 lg:p-8 shadow-sm">
          <div className="mb-2">
            <h1 className="text-[1.3rem] sm:text-[1.5rem] lg:text-[1.8rem] font-bold leading-snug text-neutral-800 mb-1">
              Change Pin 👋
            </h1>
            <p className="text-[0.9rem] sm:text-[0.95rem] leading-relaxed text-gray-500">
              Please save your pin because this so important.
            </p>
          </div>

          <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
            <PinInput length={6} callbackForm={handlePinChange} />

            <Button type="submit" className="w-full p-4">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ProfileChangePin;
