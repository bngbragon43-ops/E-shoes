import { useState } from "react";
import { SiNike } from "react-icons/si";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const NavbarMenu = [
  {
    id: 1,
    title: "HOME",
    link: "/",
  },
  {
    id: 2,
    title: "Products",
    link: "/products",
  },
  {
    id: 3,
    title: "About",
    link: "/about",
  },
  {
    id: 4,
    title: "Shop",
    link: "/shop",
  },
  {
    id: 5,
    title: "Contacts",
    link: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="container flex items-center justify-between py-4 md:pt-4">

        {/* LOGO */}
        <div className="flex items-center gap-2 text-2xl font-bold uppercase">
          <p className="text-primary">E -</p>

          <p className="text-secondary">
            SHOES
          </p>

          < SiNike  className="text-black text-5xl" />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8 text-gray-600">

            {NavbarMenu.map((menu) => (
              <li
                className="text-xl"
                key={menu.id}
              >
                <a
                  href={menu.link}
                  className="inline-block px-3 py-1 font-semibold transition hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444]"
                >
                  {menu.title}
                </a>
              </li>
            ))}

            {/* CART */}
            <button
              type="button"
              className="rounded-full p-2 text-2xl transition hover:bg-primary hover:text-white"
            >
              <MdOutlineShoppingCart />
            </button>

          </ul>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <MdMenu className="text-4xl" />
        </button>

      </div>

      {/* MOBILE MENU */}
      <ResponsiveMenu
        open={open}
        onClose={() => setOpen(false)}
        menus={NavbarMenu}
      />

    </div>
  );
};

export default Navbar;