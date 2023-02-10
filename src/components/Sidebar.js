import Sidebarlink from "./Sidebarlink";
// Import Hero Icons
import { HiAcademicCap, HiHome, HiUser,HiArchive, HiTable, HiKey, HiCog, HiBell, HiOutlineBell } from "react-icons/hi";

export default function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[450px] p-2 fixed h-full bg-indigo-900">
            <br/>
            <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
                <Sidebarlink text="Home" Icon={HiHome} active= {true} />
                <br />
                <Sidebarlink text="Notifications" Icon={HiBell} active= {false} />
                <br />
                <Sidebarlink text="Profile" Icon={HiUser} active= {false}  />
                <br />
                <Sidebarlink text="API" Icon={HiKey} active= {false}  />
                <br />
                <Sidebarlink text="Ledger" Icon={HiTable} active= {false}  />
                <br />
                <Sidebarlink text="Settings" Icon={HiCog} active= {false}  />
            </div>
            <br />
        </div>
    )
}