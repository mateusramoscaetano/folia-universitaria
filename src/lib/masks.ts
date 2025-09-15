export const formatWhatsApp = (value: string): string => {
  const cleaned = value.replace(/\D/g, "");

  if (cleaned.length === 0) return "";
  if (cleaned.length <= 2) return `(${cleaned}`;
  if (cleaned.length <= 7)
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  if (cleaned.length <= 11)
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
      7
    )}`;

  return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
    7,
    11
  )}`;
};

export const formatCPF = (value: string): string => {
  const cleaned = value.replace(/\D/g, "");

  if (cleaned.length === 0) return "";
  if (cleaned.length <= 3) return cleaned;
  if (cleaned.length <= 6) return `${cleaned.slice(0, 3)}.${cleaned.slice(3)}`;
  if (cleaned.length <= 9)
    return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6)}`;
  if (cleaned.length <= 11)
    return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(
      6,
      9
    )}-${cleaned.slice(9)}`;

  return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(
    6,
    9
  )}-${cleaned.slice(9, 11)}`;
};

export const cleanWhatsApp = (value: string): string => {
  return value.replace(/\D/g, "");
};

export const cleanCPF = (value: string): string => {
  return value.replace(/\D/g, "");
};

export const isValidWhatsApp = (value: string): boolean => {
  const cleaned = cleanWhatsApp(value);
  return cleaned.length === 11;
};

export const isValidCPF = (value: string): boolean => {
  const cleaned = cleanCPF(value);
  return cleaned.length === 11;
};
