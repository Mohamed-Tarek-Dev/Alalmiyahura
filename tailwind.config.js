/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        colors: {
            primary: "#29398C",
            primaryLight: "#0A6EBD",
            linksColor: "#8F98C5",
            white: "#fff",
            dropdown: "0px 7px 10px -7px rgba(0,0,0, 0.6)",
            background: "rgba(0,0,0,0.5)",
            crimson: "crimson",
            black: "black",
            lightYellow: "#FFFBEB",
            lightGreen: "#F2FBF2",
            lightBlue: "#F2F9FF",
            borderColor: "hsl(230, 32%, 90%)",
            backgroundOne: "#F6FAFF",
            backgroundTwo: "#FFF9FB",
            backgroundThree: "#F7FBF7",
            backYellow: "#FFFBEB",
            lightBlue: "#F2F9FF",
            backDarkBule: "#F2F4FB",
        },
        screens: {
            sm: "576px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "992px",
            // => @media (min-width: 992px) { ... }

            xl: "1200px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1400px",
            // => @media (min-width: 1536px) { ... }
        },
        fontFamily: {
            poppins: "Poppins, sans-serif",
            inter: "Inter, sans-serif;",
        },
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {},
    },
    plugins: [],
    // important: true,
};
