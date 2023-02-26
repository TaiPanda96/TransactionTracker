import DrawerComponent from "../../components/Drawer"
import SmartContractComponent from "@/components/Contracts";
import Widget from "../../components/Widgets"
import getCustomer from "../api/customer";

export default function Profile({customerProfile}) {
  return (
    <>
      <div className="bg-neutral-900 min-h-screen flex max-w-[1600px] mx-auto">
        <DrawerComponent/>
        <SmartContractComponent customerProfile={customerProfile}/>
        <Widget customerProfile={customerProfile}/>
      </div>
    </>
  )
}

export async function getStaticProps() {
    let data = await getCustomer()
    return { props: { customerProfile: data }}
}