import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FindInPageIcon from '@mui/icons-material/FindInPage';
// Import Hero Icons
import { HiHome, HiUser, HiTable, HiKey, HiCog, HiBell, HiLogin, GrDocumentText } from "react-icons/hi";

const Drawer = () => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [open, setOpen] = useState(false);
  const [error,setError] = useState(null);
  const [role, setUserRole] = useState('');
  const [user, setUser] = useState('');
  const [isLoading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setAuthorized(sessionStorage.getItem("authenticated") || false);
    const user = setUser(sessionStorage.getItem("userSession"));
    fetch(`http://localhost:8080/api/auth/get?id=${user}`, {
      headers: {
        'Content-Type': 'application/json',
        "authorization": sessionStorage.getItem("accessToken") || '',
      }
    })
      .then(
        (data) => data.json()
      ).then(
        (data) => {
          if (data && data['error']) {
            let { name, message, expiredAt } = data['error'];
            if (name === 'TokenExpiredError') {
              router.push('/')
            }
          } else {
            setData(data);
            setLoading(false);
            setUserRole(sessionStorage.getItem("role"));
          }
        }
      ).catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, []);

  const Menus = [
    { title: "Lending View", icon: <DashboardIcon className="fill-white" />, link:"/dashboard"},
    { title: "Search", icon: <FindInPageIcon className="fill-white" />, link:"/search"},
    {
      title: "Borrower Profile", icon: <HiUser className="fill-white" />, link: "/profile", submenus: [
        role === "lender" || role === 'admin' ? { title: "Contracts", icon: <HiLogin className="fill-white" />, link: "/profile/contracts" } : { title: "Agreements", icon: <HiLogin className="fill-white" />, link: "/profile/contracts" } ,
        { title: "Upcoming Compliance", icon: <HiCog className="fill-white" />, link: "/alerts" },
        role === "lender" || role === 'admin' ? { title: "Originations", icon: <HiLogin className="fill-white" />, link: "/profile/docs" } : { title: "Asset Profile", icon: <HiLogin className="fill-white" />, link: "/profile/docs" } ,

      ]
    },
    { title: "Alerts", icon: <HiBell className="fill-white" />, link: "/alerts", },
    { title: "All Ledgers", icon: <HiTable className="fill-white" />, link: "/ledger" },
    { title: "Settings", icon: <HiCog className="fill-white" />, link: "/settings" },
    {
      title: "API", icon: <HiKey />, link: "/api",
      submenus: [
        { title: "Keys", icon: <HiCog className="fill-white" />, link: "/api/keys" },
        { title: "Docs", icon: <HiLogin className="fill-white" />, link: "/api/docs" },
      ]
    }
  ]

  return (
    <div className="max-w-2xl sm:ml-[5px] xl:ml-[2px] border-gray-500 bg-gray">
      <div className={`${open ? "w-80" : "w-20"} bg-indigo-900 h-screen p-5  pt-8 relative duration-300`}>
        <ArrowCircleLeftIcon className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple fill-white
           border-2 rounded-full  ${!open && "fill-white rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <MenuOpenIcon
            className={`cursor-pointer duration-500 ${open ? "rotate-[360deg] fill-white" : "fill-white"
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

export default Drawer