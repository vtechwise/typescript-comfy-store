import { Header } from "@/components/global"
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <section>
     <Header/>
      <nav></nav>
      <main className="align-element py-20">
        <Outlet/>
      </main>
    </section>
  )
}
export default HomeLayout