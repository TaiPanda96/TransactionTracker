import DrawerComponent from "../../components/Drawer"
import SmartContractComponent from "@/components/SmartContracts";
import Widget from "../../components/Widgets"
import getCustomer from "../../../endpoints/customer";

export default function Profile({customerProfile}) {
  return (
    <>
      <div className="bg-neutral-900 min-h-screen flex max-w-[1600px] mx-auto">
        <DrawerComponent/>
        <SmartContractComponent/>
        <Widget customerProfile={customerProfile}/>
      </div>
    </>
  )
}

export async function getStaticProps() {
    let data = await getCustomer()
    return { props: { customerProfile: data }}
}