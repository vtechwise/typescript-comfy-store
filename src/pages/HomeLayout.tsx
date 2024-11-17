import { Header, Navbar } from "@/components/global"
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <section>
     <Header/>
      <Navbar/>
      <main className="align-element py-20">
        <Outlet/>
      </main>
    </section>
  )
}
export default HomeLayout