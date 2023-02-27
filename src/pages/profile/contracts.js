import DrawerComponent from "../../components/Drawer"
import SmartContractComponent from "@/components/Contracts";
import Widget from "../../components/Widgets"

export default function Profile() {
  return (
    <>
      <div className="bg-neutral-900 min-h-screen flex max-w-[1600px] mx-auto">
        <DrawerComponent/>
        <SmartContractComponent/>
        <Widget/>
      </div>
    </>
  )
}