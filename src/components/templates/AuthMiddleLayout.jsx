import { LoadingOverlay } from "@components/molecules";
import spinner from "@/zustand/spinner";
/**
 * A layout component that centers its children both vertically and horizontally on the screen.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns
 */
function AuthMiddleLayout({ children }) {
  const { isLoading } = spinner((state) => state);
  return (
    <>
      <main className="flex items-center justify-center h-screen bg-blue-700 bg-[radial-gradient(circle_468px_at_center,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)]">
        <section className="w-[90%] px-10 py-8 md:w-120 md:px-14 md:py-12 lg:w-137.5 lg:px-20 lg:py-16 bg-white rounded-[20px] shadow-md">
          {children}
        </section>
      </main>
      <LoadingOverlay isOpen={isLoading} />
    </>
  );
}

export default AuthMiddleLayout;
