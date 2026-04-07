import { useState } from "react";
import { EyeSlashIcon } from "@components/atoms/icons";

const InputField = ({ label, id, iconLeft, isPassword, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const type =
    isPassword && !showPassword
      ? "password"
      : isPassword && showPassword
        ? "text"
        : props.type;

  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="mb-2 text-[0.9rem] font-bold text-neutral-800"
      >
        {label}
      </label>
      <div className="relative flex items-center">
        {iconLeft && (
          <div className="absolute left-3 text-[#a0a0a0]">{iconLeft}</div>
        )}
        <input
          id={id}
          type={type}
          className="w-full py-3 sm:py-[0.9rem] pl-10 pr-11 text-[0.9rem] sm:text-[0.95rem] transition-colors bg-transparent border rounded-lg outline-none border-neutral-200 text-neutral-800 focus:border-blue-700"
          {...props}
        />
        {isPassword && (
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 cursor-pointer text-[#a0a0a0]"
          >
            <EyeSlashIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
