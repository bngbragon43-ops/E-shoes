import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { FadeUp } from "../utility/Animation";
import { MdOutlineShoppingCart } from "react-icons/md";

import p1 from "../../assets/2.jpg";
import p2 from "../../assets/3.jpg";
import p3 from "../../assets/4.jpg";
import p4 from "../../assets/5.jpg";
import p5 from "../../assets/6.jpg";
import p6 from "../../assets/7.jpg";
import p18 from "../../assets/18.jpg";
import p19 from "../../assets/19.jpg";
import p20 from "../../assets/20.jpg";
import p21 from "../../assets/22.jpg";

const Products = [
    { id: 1, title: "Jordan Nike 1", price: 2500, img: p1 },
    { id: 2, title: "Jordan Nike 1", price: 1500, img: p2 },
    { id: 3, title: "Jordan Nike 1", price: 1200, img: p3 },
    { id: 4, title: "Jordan Nike 1", price: 2000, img: p4 },
    { id: 5, title: "Jordan Nike 1", price: 3500, img: p5 },
    { id: 6, title: "Jordan Nike 1", price: 1800, img: p6 },
      { id: 7, title: "Jordan Nike 1", price: 1800, img: p18 },
    { id: 8, title: "Jordan Nike 1", price: 1800, img: p19 },
    { id: 9, title: "Jordan Nike 1", price: 1800, img: p20 },
    { id: 10, title: "Jordan Nike 1", price: 1800, img: p21 },
];

const ProductCard = () => {
    const { addToCart } = useCart();

    const handleAddToCart = (produit) => {
        addToCart({
            id: produit.id,
            name: produit.title,
            price: produit.price,
            img: produit.img,
            size: null,
        });
    };

    return (
        <section className="bg-gray-50/50">
            <div className="container pt-16 pb-24">
                <motion.div
                    variants={FadeUp(0.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-averia text-gray-900">
                        Nos <span className="text-primary">Produits</span>
                    </h2>
                    <p className="text-gray-400 mt-3 max-w-md mx-auto">
                        Discover our shoes
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-6">
                    {Products.map((produit, index) => (
                        <motion.div
                            key={produit.id}
                            variants={FadeUp(0.2 + index * 0.15)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
                        >
                            <div className="relative overflow-hidden h-36 sm:h-40">
                                <img
                                    src={produit.img}
                                    alt={produit.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-4">
                                <h3 className="text-base font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
                                    {produit.title}
                                </h3>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-secondary font-bold text-lg">
                                        {produit.price} XAF
                                    </span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleAddToCart(produit);
                                        }}
                                        aria-label={`Ajouter ${produit.title} au panier`}
                                        className="inline-flex items-center gap-1 bg-primary hover:bg-primary/90 text-white text-xs font-semibold py-2 px-3 rounded-xl transition-all duration-300 cursor-pointer"
                                    >
                                        <MdOutlineShoppingCart className="w-4 h-4" />
                                        Ajouter
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCard;
