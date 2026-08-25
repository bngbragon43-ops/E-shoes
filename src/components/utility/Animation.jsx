export const FadeUp = (delay) => {
    return {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay, ease: "easeOut" },
        },
    };
};

export const FadeLeft = (delay) => {
    return {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, delay, ease: "easeOut" },
        },
    };
};

export const FadeRight = (delay) => {
    return {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, delay, ease: "easeOut" },
        },
    };
};

export const Scale = (delay) => {
    return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, delay, ease: "easeOut" },
        },
    };
};