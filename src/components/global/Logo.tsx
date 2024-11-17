import { Armchair } from "lucide-react"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
      <Link to='/' className="bg-primary hidden lg:flex justify-center items-center rounded-lg text-white p-2">
          <Armchair className="w-8 h-8"/>
    </Link>
  )
}
export default Logo