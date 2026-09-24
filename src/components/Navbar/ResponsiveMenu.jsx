import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MdClose, MdOutlineShoppingCart } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

const ResponsiveMenu = ({ open, onClose, menus }) => {
  const { totalItems } = useCart();

  // Ferme le menu avec la touche Echap
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Bloque le scroll de la page quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {/* BACKDROP : clique en dehors pour fermer */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        >
          {/* PANNEAU DU MENU */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="m-4 rounded-3xl bg-primary text-white shadow-2xl"
          >

            <div className="flex items-center justify-between px-6 pt-5">
              <p className="text-xl font-bold uppercase tracking-wide">Menu</p>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-full p-1 transition hover:bg-white/20"
              >
                <MdClose className="text-3xl" />
              </button>
            </div>

            {/* LIENS */}
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-1 px-6 py-6 text-lg font-semibold uppercase"
            >
              {menus.map((menu) => (
                <motion.li key={menu.id} variants={itemVariants}>
                  <NavLink
                    to={menu.link}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `inline-block w-full rounded-xl px-3 py-2 transition hover:bg-white hover:text-primary ${
                        isActive ? "bg-white text-primary" : ""
                      }`
                    }
                  >
                    {menu.title}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>

            {/* PANIER */}
            <div className="border-t border-white/20 px-6 py-4">
              <Link
                to="/cart"
                onClick={onClose}
                className="flex items-center gap-2 rounded-full bg-white px-5 py-2 font-semibold uppercase text-primary transition hover:bg-secondary hover:text-white"
              >
                <MdOutlineShoppingCart className="text-2xl" />
                Cart
                {totalItems > 0 && (
                  <span className="ml-1 flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-secondary text-white text-xs font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
