import DashboardComponent from "@/components/Dashboard/Dashboard"
import DrawerComponent from "../components/Drawer"

function Dashboard() {
  return (
    <>
      <div className="bg-neutral-900 min-h-screen flex max-w-[1600px] mx-auto">
        <DrawerComponent/>
        <DashboardComponent/>
      </div>
    </>
  )
}

export default Dashboard

