import { ReactNode } from "react";


type FooterColumnProps = {
    title:string;
    children:React.ReactNode;
}


const FooterColumn = ({title,children}:FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
        <h4 className="text-lg font-semibold leading-[120%] whitespace-nowrap font-sans">{title}</h4>
        {children}
    </div>
  )
}

export default FooterColumn