import DrawerComponent from "../components/Ledger/Drawer"
import ProfileComponent from "../components/Profile"

export default function Profile() {
  return (
    <>
      <div className="bg-neutral-900 min-h-screen flex max-w-[1600px] mx-auto">
        <DrawerComponent/>
        <ProfileComponent/>
      </div>
    </>
  )
}