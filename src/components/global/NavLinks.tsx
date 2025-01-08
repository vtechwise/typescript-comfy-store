import { useAppSelector } from "@/hooks";
import { links } from "@/utils";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const user = useAppSelector((store) => store.userState.user);
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4 ">
      {links.map((link) => {
        const restrictedRoute =
          link.href === "checkout" || link.href === "orders";
        if (restrictedRoute && !user) return null;
        return (
          <NavLink
            to={link.href}
            className={({ isActive }) => {
              return `capitalize font-light tracking-wide bg-testing ${
                isActive ? "text-primary" : ""
              }`;
            }}
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
