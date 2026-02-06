// components/ui/InputField.tsx
import { ChangeEvent } from "react";

interface InputFieldProps {
  id: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  required,
  className,
}) => {
  return (
    <div className="relative w-full">
      <label htmlFor={id} className="sr-only">
        {placeholder || "Input field"}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full rounded-xl border border-gray-300 py-3 pl-4 pr-28 text-sm focus:border-[#405FF2] focus:outline-none focus:ring-2 focus:ring-[#405FF2]/20 ${className}`}
      />
    </div>
  );
};

export default InputField;
