import { useState, useEffect } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

// Import Hero Icons
import { HiHome, HiUser, HiTable, HiKey, HiCog, HiBell, HiLogin } from "react-icons/hi";


const Drawer = () => {

  const [open, setOpen] = useState(false)
  const Menus = [
    { title: "Alerts", icon: <HiHome className="fill-white"/>, link: "/alerts",  },
    { title: "Profile", icon: <HiUser className="fill-white"/>, link: "/profile" },
    { title: "Ledger", icon: <HiTable className="fill-white"/>, link: "/ledger" },
    { title: "Settings", icon: <HiCog className="fill-white"/>, link: "/settings" },
    {
      title: "API", icon: <HiKey/>, link: "/api",
      submenus: [
        { title: "API Keys", icon: "key", link: "/api/keys" },
        { title: "API Docs", icon: "book", link: "/api/docs" },
      ]
    }
  ]

  return (
    <div className="max-w-2xl sm:ml-[5px] xl:ml-[2px] border-gray-500 bg-gray">
      <div className={`${open ? "w-80" : "w-20"} bg-indigo-900 h-screen p-5  pt-8 relative duration-300`}>
        <ArrowCircleLeftIcon className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple fill-white
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <MenuOpenIcon
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg] fill-white"
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
                {submenus && (
                  <span className="text-white">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                )}
              </li>
            </ul>
          )
        })}
      </div>

    </div>

  )
}

export default Drawer