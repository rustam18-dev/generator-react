import {Sidebar} from "./components/Sidebar.tsx"
import {Content} from "./components/Content.tsx"


export default function App() {
  return (
    <>
      <div className="bg-[#2f2f2f] text-white h-screen w-full flex">
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

