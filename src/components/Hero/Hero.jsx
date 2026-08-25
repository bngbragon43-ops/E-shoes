import { motion } from "framer-motion";
import { IoBagHandleOutline, IoArrowForward } from "react-icons/io5";


import shoes1 from "../../assets/1.png";
import logo from "../../assets/logo.png";
import { FadeUp, FadeRight } from "../utility/Animation";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary/[0.03] to-secondary/[0.05]">
            {/* accents de fond */}
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-3xl" aria-hidden="true" />

            <img
                src={logo}
                className="absolute top-10 md:-top-6 right-0 w-[160px] md:w-[220px] opacity-[0.04] rotate-[25deg] pointer-events-none select-none"
                alt=""
            />

            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[680px] relative z-10 items-center">
                {/* texte */}
                <div className="order-2 md:order-1 py-10 md:py-0">
                    <div className="text-center md:text-left space-y-6 lg:max-w-[440px] mx-auto md:mx-0">
                       
                        <motion.h1
                            variants={FadeUp(0.4)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] font-averia text-gray-900"
                        >
                            Easy
                            <br />
                            Basket{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Shoes!
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={FadeUp(0.6)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-lg md:text-xl text-gray-600 tracking-wide"
                        >
                            Order now and receive a free shopping cart
                        </motion.p>

                        <motion.p
                            variants={FadeUp(0.8)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-gray-400 max-w-sm mx-auto md:mx-0 leading-relaxed"
                        >
                            Discover our exclusive collection of shoes that combine comfort and style for all your activities.
                        </motion.p>

                        <motion.div
                            variants={FadeUp(1.0)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex items-center gap-4 justify-center md:justify-start pt-4"
                        >
                            <button className="group inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 px-7 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 rounded-2xl cursor-pointer">
                                <IoBagHandleOutline className="w-5 h-5" />
                                Order now
                                <span className="group-hover:translate-x-1 transition-transform duration-300">
                                    <IoArrowForward className="w-4 h-4" />
                                </span>
                            </button>
                            <a
                                href="#collection"
                                className="inline-flex items-center gap-1.5 font-semibold text-gray-600 hover:text-primary transition-colors duration-300"
                            >
                                View collection
                                <IoArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* image */}
                <motion.div
                    variants={FadeRight(0.4)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="order-1 md:order-2 relative flex justify-center items-center py-8 md:py-0"
                >
                    <div className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] bg-gradient-to-br from-secondary/15 to-primary/10 rounded-full blur-3xl" aria-hidden="true" />
                    <img
                        src={shoes1}
                        className="relative w-[260px] sm:w-[300px] md:w-[480px] drop-shadow-2xl -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-700 ease-out"
                        alt="Basket shoes"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;