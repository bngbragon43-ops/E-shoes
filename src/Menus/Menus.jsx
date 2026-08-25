import { motion } from "framer-motion";
import { FadeUp } from "../components/utility/Animation";
import { IoArrowForward } from "react-icons/io5";

import s1 from "../assets/2.jpg";
import s2 from "../assets/3.jpg";
import s3 from "../assets/4.jpg";
import s4 from "../assets/5.jpg";
import s5 from "../assets/6.jpg";

const MenuData = [
    { id: 1, title: "AZERTY", img: s1, price: "500" },
    { id: 2, title: "Products", img: s2, price: "500" },
    { id: 3, title: "About", img: s3, price: "500" },
    { id: 4, title: "Shop", img: s4, price: "500" },
    { id: 5, title: "Contacts", img: s5, price: "500" },
];

const Menus = () => {
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
                        Our <span className="text-primary">Menu</span>
                    </h2>
                    <p className="text-gray-400 mt-3 max-w-md mx-auto">
                        Discover our best products selected for you
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-6">
                    {MenuData.map((menu, index) => (
                        <motion.div
                            key={menu.id}
                            variants={FadeUp(0.2 + index * 0.15)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
                        >
                            <div className="relative overflow-hidden h-36 sm:h-40">
                                <img
                                    src={menu.img}
                                    alt={menu.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-4">
                                <h3 className="text-base font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
                                    {menu.title}
                                </h3>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-secondary font-bold text-lg">
                                        {menu.price} XAF
                                    </span>
                                    <IoArrowForward className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menus;