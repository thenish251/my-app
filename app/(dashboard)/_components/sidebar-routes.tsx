'use strict';
import dynamic from 'next/dynamic'; 
import { Compass, Layout } from "lucide-react";
// import  SidebarItem  from "./sidebar-item";
const SidebarItem = dynamic(() => import('./sidebar-item'), { ssr: false });

const guestRoutes = [{
    icon: Layout,
    label: "Dashboard",
    href: "/"
},
{
    icon: Compass,
    label :"Browse",
    href: "/search"
}]
const sidebarRoutes = () => {
    const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
        
        {routes.map((route)=>(
            <SidebarItem
            key= {route.href}
            icon={route.icon}
            label = {route.label}
            href ={route.href}
            />
       ))}
        </div>
  )
}

export default sidebarRoutes