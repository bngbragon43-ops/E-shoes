import { motion } from "framer-motion";
import { FadeLeft, FadeRight } from "../utility/Animation";
import { IoArrowForward } from "react-icons/io5";
import s1 from "../../assets/9.jpg";

export const Banner2 = () => {
    return (
        <section className="relative overflow-hidden">
            {/* accents de fond */}
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />

            <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-center py-16 md:py-24 relative z-10">
                {/* info */}
                <motion.div
                    variants={FadeLeft(0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col justify-center order-2 md:order-1"
                >
                    <div className="text-center md:text-left space-y-5 lg:max-w-[420px] mx-auto md:mx-0">
                        <span className="inline-block font-semibold text-secondary tracking-wider uppercase">
                            Find all your favorite NIKE pairs
                        </span>

                        <p className="text-gray-500 leading-relaxed max-w-sm mx-auto md:mx-0">
                            Enjoy our exclusive deals on a selection of our best shoes. Available for a limited time only.
                        </p>

                        <div className="pt-2">
                            <button className="group inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 px-7 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 rounded-2xl cursor-pointer">
                                Shop now
                                <IoArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* image */}
                <motion.div
                    variants={FadeRight(0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex justify-center order-1 md:order-2"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-secondary/10 rounded-3xl blur-2xl scale-110" aria-hidden="true" />
                        <img
                            src={s1}
                            alt="Featured shoes"
                            className="relative w-[300px] md:w-[380px] rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
