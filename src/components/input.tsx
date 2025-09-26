import { IMaskInput } from "react-imask";

interface InputProps {
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  mask?: "cpf" | "none";
}

export default function Input({
  type,
  id,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  mask = "none",
}: InputProps) {
  if (mask === "cpf") {
    return (
      <div className="w-full flex items-center justify-center">
        <IMaskInput
          mask="000.000.000-00"
          value={value}
          onChange={onChange}
          disabled={disabled}
          type={type}
          id={id}
          name={name}
          required={required}
          className="w-full px-4 py-2 h-[41px] rounded-[16px] bg-white border-2 border-white text-[#4d4d4d] placeholder-gray-600 focus:outline-none focus:border-yellow-folia transition-colors"
          placeholder={placeholder}
        />
      </div>
    );
  }

  return (
    <div className="w-full flex items-center justify-center">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="w-full px-4 py-2 h-[41px] rounded-[16px] bg-white border-2 border-white text-[#4d4d4d] placeholder-gray-600 focus:outline-none focus:border-yellow-folia transition-colors"
        placeholder={placeholder}
      />
    </div>
  );
}
