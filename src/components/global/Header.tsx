import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { clearCart } from "@/features/cart/cartSlice";
import { logoutUser } from "@/features/user/userSlice";
import { toast } from "@/hooks/use-toast";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((store) => store.userState);

  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logoutUser());
    toast({ description: "Logged Out" });
    navigate("/");
  };
  return (
    <header>
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 dm:gap-x-8 items-center ">
            <p className="text-xs sm:text-sm">hello {user.username}</p>
            <Button variant="link" size="sm" onClick={handleLogout}>
              logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-x-6 justify-center -mr-4 ">
            <Button asChild variant="link" size="sm">
              <Link to="/login">sign in / guest</Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link to="/register">register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
