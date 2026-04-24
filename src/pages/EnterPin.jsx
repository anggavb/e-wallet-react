import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import { AuthLayout } from "@components/templates";
import { AuthHeader } from "@components/organisms";
import { PinInput } from "@components/molecules";
import { Button } from "@components/atoms";
import { usePageTitle } from "@hooks";

import { userLoginAction } from "@redux/slices/userLogin";
import { usersAction } from "@redux/slices/userRegistered";

const EnterPin = () => {
  usePageTitle("Enter Pin");
  const [pin, setPin] = useState("");
  const { user: userLoggedIn } = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (pin.length === 6) {
      dispatch(usersAction.updatePin({ id: userLoggedIn.id, pin }));
      dispatch(userLoginAction.updated({ ...userLoggedIn, pin }));
      toast.success("Pin set successfully!");

      setTimeout(() => {
        navigate("/admin");
      }, 1000);
      return;
    }

    toast.error("Pin must be 6 digits long");
  };

  const handlePinChange = (pinChange) => {
    setPin(pinChange);
  };
  return (
    <AuthLayout
      imageSrc="/enter-pin.png"
      imageAlt="3D Hand holding a phone with shield icon"
      imagePanelClasses="items-end justify-center"
      imageClasses="mb-[-32px] sm:mb-[-16px] md:mb-[-32px] max-h-[90vh] object-contain object-bottom"
    >
      <AuthHeader
        title="Enter Your Pin 👋"
        subtitle="Please save your pin because this so important."
      />
      <form className="flex flex-col mt-2 sm:mt-4" onSubmit={handleSubmit}>
        <PinInput length={6} callbackForm={handlePinChange} />

        <Button type="submit">Submit</Button>
      </form>
    </AuthLayout>
  );
};

export default EnterPin;
