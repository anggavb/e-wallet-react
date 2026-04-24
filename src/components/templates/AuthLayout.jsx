import { LoadingOverlay } from "@components/molecules";
import spinner from "@/zustand/spinner";
/**
 * A component for rendering the authentication layout with an image panel and form panel.
 * @param {Object} props - The props for the component.
 * @param {string} props.imageSrc - The source of the image to display.
 * @param {string} props.imageAlt - The alt text for the image.
 * @param {string} props.imagePanelClasses - Additional classes for the image panel.
 * @param {string} props.imageClasses - Additional classes for the image.
 * @param {React.ReactNode} props.children - The child nodes to display in the form panel.
 * @returns {JSX.Element} The rendered authentication layout.
 */
const AuthLayout = ({
  imageSrc,
  imageAlt,
  imagePanelClasses = "items-center justify-center",
  imageClasses = "",
  children,
}) => {
  const { isLoading } = spinner((state) => state);
  return (
    <>
      <main className="flex flex-col md:flex-row max-sm:bg-white w-full min-h-screen bg-blue-700">
        {/* Form Panel */}
        <section className="flex flex-1 min-h-screen md:min-h-0 items-center justify-center w-full p-6 bg-white md:w-[55%] lg:w-[49%] md:rounded-r-[40px] md:p-10 lg:p-12 xl:p-[3.5rem_2.5rem] 2xl:p-[4rem_3rem]">
          <div className="w-full max-w-134 xl:max-w-140 2xl:max-w-150 flex flex-col gap-4 sm:gap-5">
            {children}
          </div>
        </section>

        {/* Image Panel */}
        <section
          className={`hidden md:flex flex-1 w-full md:w-[45%] lg:w-[51%] p-8 relative ${imagePanelClasses}`}
          style={{
            backgroundImage:
              "radial-gradient(circle 468px at center, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`max-w-[90%] h-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)] ${imageClasses}`}
          />
        </section>
      </main>
      <LoadingOverlay isOpen={isLoading} />
    </>
  );
};

export default AuthLayout;
