const SocialButton = ({ icon, children, ...props }) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center w-full gap-2.5 p-3 sm:p-[0.8rem] text-[0.85rem] sm:text-[0.95rem] font-semibold transition-colors bg-transparent border rounded-full cursor-pointer border-neutral-200 text-neutral-800 hover:bg-gray-50"
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default SocialButton;
