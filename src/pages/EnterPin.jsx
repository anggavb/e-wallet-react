import { AuthLayout } from "@components/templates";
import { AuthHeader } from "@components/organisms";
import { PinInput } from "@components/molecules";
import { Button } from "@components/atoms";

import { usePageTitle } from "@hooks";

const EnterPin = () => {
  usePageTitle("Enter Pin");
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
      <form action="#" method="POST" className="flex flex-col mt-2 sm:mt-4">
        <PinInput length={6} />

        <Button type="submit">Submit</Button>
      </form>
      <nav className="mt-8 text-[0.95rem] text-center text-gray-500">
        <p>
          Forgot Your Pin?{" "}
          <a
            href="./profile-change-pin.html"
            className="font-semibold transition-colors text-blue-700 hover:underline"
          >
            Reset
          </a>
        </p>
      </nav>
    </AuthLayout>
  );
};

export default EnterPin;
