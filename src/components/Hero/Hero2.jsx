import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import p1 from "../../assets/17.png";
import p2 from "../../assets/14.png";
import p3 from "../../assets/15.png";
import p4 from "../../assets/16.png";

const products = [
    {
        id: 1,
        name: "Jordan 1 Red",
        date: "10/09/2018",
        color: "Red",
        price: "$180",
        bg: "#c11912",
        img: p1,
      
    },
    {
        id: 2,
        name: "Air Max 90",
        date: "03/26/2019",
        color: "White",
        price: "$150",
        bg: "#1a1a2e",
        img: p2,
        
    },
    {
        id: 3,
        name: "Nike Dunk Low",
        date: "10/10/2020",
        color: "Green",
        price: "$120",
        bg: "#2d6a4f",
        img: p3,
      
    },
    {
        id: 4,
        name: "Air Force 1",
        date: "09/12/1982",
        color: "Black",
        price: "$110",
        bg: "#16213e",
        img: p4,
      
    },
];

const sizes = ["35", "36", "37", "38", "40", "45"];

const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.9 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.9 }),
};

const Hero2 = () => {
    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);

    const product = products[index];

    const go = (d) => {
        setDir(d);
        setSelectedSize(null);
        setIndex((prev) => (prev + d + products.length) % products.length);
    };

    return (
        <section
            className="relative min-h-full overflow-hidden text-white transition-colors duration-700"
            style={{ backgroundColor: product.bg }}
        >
            {/* big background text */}
            <AnimatePresence mode="wait">
                <motion.p
                    key={product.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 0.06, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] sm:text-[180px] md:text-[240px] font-black font-averia uppercase whitespace-nowrap pointer-events-none select-none"
                >
                    {product.name.split(" ").slice(0, 2).join(" ")}
                </motion.p>
            </AnimatePresence>

            <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-[650px] items-center gap-8 py-14">
                {/* left — info */}
                <div className="flex flex-col justify-center space-y-6">
                    <AnimatePresence mode="wait" custom={dir}>
                        <motion.div
                            key={product.id}
                            custom={dir}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="space-y-6"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-averia uppercase leading-tight">
                                {product.name}
                            </h1>

                            <p className="text-white/70 leading-relaxed max-w-sm">
                                {product.desc}
                            </p>

                            <div className="flex gap-8 text-sm">
                                {[
                                    { label: "Release", value: product.date },
                                    { label: "Color", value: product.color },
                                    { label: "Price", value: product.price },
                                ].map((item) => (
                                    <div key={item.label}>
                                        <p className="uppercase tracking-wider text-white/40 mb-1">{item.label}</p>
                                        <p className="font-semibold">{item.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <p className="text-sm uppercase tracking-wider text-white/40 mb-3">Select size</p>
                                <div className="flex gap-2 flex-wrap">
                                    {sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-11 h-11 rounded-xl border text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                                selectedSize === size
                                                    ? "bg-white text-gray-900 border-white"
                                                    : "border-white/30 hover:bg-white/10 hover:border-white/60"
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-2">
                                <button className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-2xl hover:bg-secondary hover:text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer">
                                    Add to cart
                                </button>
                                <button
                                    onClick={() => go(-1)}
                                    className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer"
                                >
                                    <FaArrowLeft />
                                </button>
                                <button
                                    onClick={() => go(1)}
                                    className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer"
                                >
                                    <FaArrowRight />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* right — image */}
                <div className="relative flex justify-center items-center">
                    <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-white/10 rounded-full blur-3xl" aria-hidden="true" />

                    <AnimatePresence mode="wait" custom={dir}>
                        <motion.img
                            key={product.id}
                            custom={dir}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            src={product.img}
                            alt={product.name}
                            className="relative w-[280px] sm:w-[320px] md:w-[420px] drop-shadow-2xl"
                        />
                    </AnimatePresence>

                    {/* dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {products.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDir(i > index ? 1 : -1);
                                    setSelectedSize(null);
                                    setIndex(i);
                                }}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                    i === index ? "bg-white w-6" : "bg-white/30 hover:bg-white/50"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero2;
