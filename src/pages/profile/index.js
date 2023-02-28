import DrawerComponent from "../../components/Drawer"
import ProfileComponent from "../../components/Profile"
import Widget from "../../components/Livefeed"

export default function Profile() {
  return (
    <>
      <div className="bg-neutral-900 min-h-screen flex max-w-[1600px] mx-auto">
        <DrawerComponent/>
        <ProfileComponent/>
        <Widget/>
      </div>
    </>
  )
}