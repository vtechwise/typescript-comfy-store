import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <section>
      <header></header>
      <nav></nav>
      <main>
        <Outlet/>
      </main>
    </section>
  )
}
export default HomeLayout