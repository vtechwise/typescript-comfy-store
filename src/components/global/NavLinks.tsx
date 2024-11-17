import { links } from "@/utils";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4 ">
      {links.map((link) => {
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
