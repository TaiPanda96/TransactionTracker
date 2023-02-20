import Widget from '../components/Widgets';
import LedgerAlertComponent from "../components/Alerts/AlertFeed"
import DrawerComponent from "../components/Drawer"
import getCustomer from "../../endpoints/customer"

function Feed({ customerProfile }) {
  return (
    <>
      <div className="bg-neutral-900 min-h-screen flex max-w-[1600px] mx-auto">
        <DrawerComponent/>
        <LedgerAlertComponent/>
        <Widget customerProfile={customerProfile}/>
      </div>
    </>
  )
}

export async function getStaticProps() {
  let data = await getCustomer()
  return { props: { customerProfile: data }}
}

export default Feed

