import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import TimelineIcon from '@mui/icons-material/Timeline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import BackupIcon from '@mui/icons-material/Backup';
import PaidIcon from '@mui/icons-material/Paid';

import { HiHome, HiUser, HiTable, HiKey, HiCog, HiBell, HiLogin, GrDocumentText } from "react-icons/hi";

const BorrowerSidebar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Home", icon: <DashboardIcon TimelineIcon className="fill-white" />,link:`/profile`},
    { title: "Timeline", icon: <TimelineIcon className="fill-white" />, link:`/${router.query.userid}/timeline`},
    { title: "Files", icon: <BackupIcon className="fill-white" />, link:`/${router.query.userid}/files`},
    { title: "Repayments", icon: <PaidIcon className="fill-white" />, link:`/${router.query.userid}/repayments`},
    { title: "Lender Alerts", icon: <HiBell className="fill-white" />, link: `/${router.query.userid}/alerts`},
    { title: "Event History", icon: <HiTable className="fill-white" />, link: `/${router.query.userid}/settings` },
    { title: "Settings", icon: <HiCog className="fill-white" />, link: "/settings" },
  ]

  return (
    <div className="max-w-2xl sm:ml-[5px] xl:ml-[2px] border-gray-500 bg-gray">
      <div className={`${open ? "w-80" : "w-20"} bg-indigo-900 h-screen p-5  pt-8 relative duration-300`}>
        <ArrowCircleLeftIcon className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple bg-white
           border-2 rounded-full`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <MenuOpenIcon
            className={`cursor-pointer duration-500 bg-white ${open ? "rotate-[360deg]" : ""
              }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            Menu
          </h1>
        </div>
        {open && Menus.map((menu, index) => {
          const { title, icon, link, submenus } = menu;
          return (
            <ul>
              <li className="flex items-center gap-x-4 mt-8">
                <div className="flex items-center gap-x-2">
                  <span className="text-white">
                    {icon}
                  </span>
                  <a href={link} className="text-white font-medium text-lg">
                    {title}
                  </a>
                </div>
              </li>
              {submenus && submenus.map((item) => {
                return (
                  <ul className="space-y-6 lg:space-y-4  border-slate-50 sm:ml-[70px] xl:ml-[5px] space-gap-between m-3">
                    <li>
                      <a href={item.link} className="text-white font-medium text-sm xl:ml-[25px]">
                        <span>
                          {item.title}
                        </span>
                      </a>
                    </li>
                  </ul>
                )
              })

              }
            </ul>
          )
        })}
      </div>
    </div>
  )
}

export default BorrowerSidebar