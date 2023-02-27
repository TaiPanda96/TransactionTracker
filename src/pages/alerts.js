import Widget from '../components/Widgets';
import LedgerAlertComponent from "../components/Alerts/AlertFeed"
import DrawerComponent from "../components/Drawer"

function Feed() {
  return (
    <>
      <div className="bg-neutral-900 min-h-screen flex max-w-[1600px] mx-auto">
        <DrawerComponent/>
        <LedgerAlertComponent/>
        <Widget/>
      </div>
    </>
  )
}

export default Feed

