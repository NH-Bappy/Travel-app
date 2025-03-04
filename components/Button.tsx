import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  className?: string; // Allow users to pass custom classes
  full?:boolean;
};

const Button = ({ type, title, icon, className,full }: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${className} ${full && 'w-full'}`}>
      {icon && <Image src={icon} alt={title} width={24} height={24}/>}
      <label className="text-base font-semibold whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
