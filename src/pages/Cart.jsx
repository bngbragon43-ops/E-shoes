import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { FadeUp } from "../components/utility/Animation";
import {
  MdOutlineShoppingCart,
  MdDeleteOutline,
} from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";

const Cart = () => {
  const {
    items,
    increment,
    decrement,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  if (items.length === 0) {
    return (
      <section className="container py-24 flex flex-col items-center justify-center text-center">
        <MdOutlineShoppingCart className="text-8xl text-gray-300 mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold font-averia text-gray-800">
          Your basket is empty
        </h1>
        <p className="text-gray-400 mt-3 mb-8">
          Visit our products and add to your basket
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-7 rounded-2xl transition-all duration-300 cursor-pointer"
        >
          Went to the shop
          <IoArrowForward className="w-4 h-4" />
        </Link>
      </section>
    );
  }

  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-averia text-gray-900">
          YOUR <span className="text-primary">Basket</span>
        </h1>
        <p className="text-gray-400 mt-3">
          {totalItems} article{totalItems > 1 ? "s" : ""} dans votre panier
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* liste des articles */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={`${item.id}-${item.size}`}
              variants={FadeUp(0.1 + index * 0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-xl"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                {item.size && (
                  <p className="text-sm text-gray-400">Taille : {item.size}</p>
                )}
                <p className="text-secondary font-bold mt-1">
                  {item.price * item.quantity} XAF
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decrement(item.id, item.size)}
                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-gray-600 transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increment(item.id, item.size)}
                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-gray-600 transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id, item.size)}
                aria-label={`Supprimer ${item.name}`}
                className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
              >
                <MdDeleteOutline className="text-2xl" />
              </button>
            </motion.div>
          ))}

          <button
            onClick={clearCart}
            className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
          >
            Vider le panier
          </button>
        </div>

        {/* résumé */}
        <div className="lg:col-span-1">
          <motion.div
            variants={FadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-6 sticky top-24"
          >
            <h2 className="text-xl font-bold font-averia text-gray-900 mb-4">
              Résumé
            </h2>

            <div className="flex justify-between text-gray-600 mb-2">
              <span>
                Articles ({totalItems})
              </span>
              <span>{totalPrice} XAF</span>
            </div>

            <div className="flex justify-between text-gray-600 mb-2">
              <span>Livraison</span>
              <span>Gratuite</span>
            </div>

            <div className="border-t border-gray-200 my-4" />

            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-primary">
                {totalPrice} XAF
              </span>
            </div>

            <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 rounded-2xl transition-all duration-300 cursor-pointer">
              Passer la commande
            </button>

            <Link
              to="/shop"
              className="block text-center mt-3 text-gray-400 hover:text-primary transition-colors text-sm"
            >
              Continuer vos achats
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
