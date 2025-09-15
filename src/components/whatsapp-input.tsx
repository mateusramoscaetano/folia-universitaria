import { WhatsAppIcon } from "./icons/whats-svg";
import { IMaskInput } from "react-imask";

interface WhatsAppInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
}

export default function WhatsAppInput({
  value,
  onChange,
  id = "whatsapp",
  name = "whatsapp",
  required = false,
  disabled = false,
}: WhatsAppInputProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-full max-w-[267px] md:max-w-[360px]">
        <div className="relative flex items-center bg-white border-2 border-white rounded-[16px] h-[41px] focus-within:border-yellow-folia transition-colors">
          <div className="flex items-center pl-3">
            <WhatsAppIcon />
            <div className="w-px h-6 bg-gray-300 mx-3"></div>
          </div>
          <div className="flex-1 flex items-center">
            <IMaskInput
              mask="(00) 00000-0000"
              value={value}
              onChange={onChange}
              disabled={disabled}
              type="tel"
              id={id}
              name={name}
              required={required}
              className="w-full h-full text-[#4d4d4d] placeholder-gray-300 focus:outline-none bg-transparent"
              placeholder="(11) 99999-9999"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
