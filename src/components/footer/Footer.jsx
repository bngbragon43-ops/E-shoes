import { motion } from "framer-motion";
import { FadeUp } from "../utility/Animation";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { IoArrowForward } from "react-icons/io5";
import logo from "../../assets/Logo.png";

const links = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#products" },
    { name: "Menu", href: "#menu" },
    { name: "Contact", href: "#contact" },
];

const socials = [
    { icon: <FaFacebook className="w-5 h-5" />, href: "#" },
    { icon: <FaWhatsapp className="w-5 h-5" />, href: "#" },
    { icon: <AiFillTikTok className="w-5 h-5" />, href: "#" },
];

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* logo & description */}
                    <motion.div
                        variants={FadeUp(0.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        <img src={logo} alt="Logo" className="w-16 h-16 rounded-xl" />
                        <p className="text-gray-400 leading-relaxed max-w-xs">
                            Your destination for quality shoes that combine comfort and style.
                        </p>
                        <div className="flex gap-3">
                            {socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* liens rapides */}
                    <motion.div
                        variants={FadeUp(0.4)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        <h3 className="text-lg font-bold font-averia">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {links.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-secondary inline-flex items-center gap-1.5 transition-colors duration-300"
                                    >
                                        <IoArrowForward className="w-3.5 h-3.5" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* newsletter */}
                    <motion.div
                        variants={FadeUp(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        <h3 className="text-lg font-bold font-averia">
                            Newsletter
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Sign up to receive our exclusive offers.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 bg-white/10 text-white placeholder-gray-500 px-4 py-2.5 rounded-l-xl border border-white/10 focus:outline-none focus:border-primary transition-colors duration-300"
                            />
                            <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-r-xl font-semibold transition-colors duration-300 cursor-pointer">
                                OK
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* barre inférieure */}
            <div className="border-t border-white/10">
                <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
                    
                    <p>
                        Made by{" "}
                        <span className="text-secondary font-semibold">TREVOR YOPA</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};
