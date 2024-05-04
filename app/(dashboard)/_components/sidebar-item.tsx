import { LucideIcon } from "lucide-react"


interface SidebarItemProps {
    icon:LucideIcon;
    label: string;
    href: string;

}

 const SidebarItem = ({
    icon:Icon,
    label,
    href,
 }:SidebarItemProps) =>{
    return(
        <div>
            sidebar item!!
        </div>
    )
}


export default SidebarItem