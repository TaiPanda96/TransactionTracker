import Sidebar from "../components/Sidebar"
import FeedComponent from "../components/FeedComponent"
import Widget from '../components/Widgets';

export default function Feed() {
  return (
    <>
      <div className="bg-neutral-900 min-h-screen flex max-w-[1600px] mx-auto">
        <Sidebar/>
        <FeedComponent/>
        <Widget/>
      </div>
    </>
  )
}
