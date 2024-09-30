import exp from "constants";
import Navbar from "@/components/navbar";
import SidebarLeft from "@/components/sidebar";
const DashboardLayout = ({ children }:{
    children: React.ReactNode;
}) => {
    return (
        <div className="h-fuull relative">
            <div className="hidden h-full md:flex md:w-72
            md:flex-col md:fixed md:inset-y-0 z-[800]
            bg-gray-900">
                <SidebarLeft />
            </div>
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>
        </div>
    )
}
export default DashboardLayout;