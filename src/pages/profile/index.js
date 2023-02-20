import DrawerComponent from "../../components/Drawer"
import ProfileComponent from "../../components/Profile"
import Widget from "../../components/Widgets"
import getCustomer from "../../../endpoints/customer";

export default function Profile({customerProfile}) {
  return (
    <>
      <div className="bg-neutral-900 min-h-screen flex max-w-[1600px] mx-auto">
        <DrawerComponent/>
        <ProfileComponent/>
        <Widget customerProfile={customerProfile}/>
      </div>
    </>
  )
}

export async function getStaticProps() {
    let data = await getCustomer()
    return { props: { customerProfile: data }}
}