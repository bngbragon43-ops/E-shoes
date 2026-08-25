import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeUp } from "../utility/Animation";
import { IoArrowForward } from "react-icons/io5";
import s1 from "../../assets/10.jpg";

export const Banner3 = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);

    return (
        <section ref={ref} className="relative h-[500px] md:h-[600px] overflow-hidden rounded-3xl mx-4 md:mx-8 my-8">
            {/* parallax image */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
                <img
                    src={s1}
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* content */}
            <div className="relative z-10 container h-full flex items-center">
                <motion.div
                    style={{ opacity }}
                    className="max-w-lg space-y-6"
                >
                    

                    <motion.h2
                        variants={FadeUp(0.4)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-averia leading-tight text-white"
                    >
                        EXPERIENCE{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-300">
                            The ultimate in comfort
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={FadeUp(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-white/70 leading-relaxed max-w-md"
                    >
                        A premium selection of shoes designed to combine performance and elegance for everyday wear
                    </motion.p>

                    <motion.div
                        variants={FadeUp(0.8)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <button className="group inline-flex items-center gap-2.5 bg-secondary hover:bg-secondary/90 text-white font-semibold py-3.5 px-7 shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 rounded-2xl cursor-pointer">
                            Discover
                            <IoArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
