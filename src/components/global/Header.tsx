import { Divide } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState<{ username: string } | null>({
    username: "vtechwise",
  });
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <header>
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 dm:gap-x-8 items-center ">
            <p className="text-xs sm:text-sm">hello {user.username}</p>
            <Button variant="link" size="sm">
              logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-x-6 justify-center -mr-4 gap-x-6 ">
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
