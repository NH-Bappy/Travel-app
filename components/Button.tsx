import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  className?: string; // Allow users to pass custom classes
};

const Button = ({ type, title, icon, className }: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${className}`}>
      {icon && <Image src={icon} alt={title} width={24} height={24}/>}
      <label className="text-base font-semibold whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
