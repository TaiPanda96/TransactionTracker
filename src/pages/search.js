import DrawerComponent from "../components/Drawer"
import Search from "../components/Search/Search";
import Widget from "../components/Livefeed";

function SearchToolbar() {
  return (
    <>
      <div className="bg-neutral-900 min-h-screen flex max-w-[1600px] mx-auto">
        <DrawerComponent/>
        <Search/>
      </div>
    </>
  )
}

export default SearchToolbar

