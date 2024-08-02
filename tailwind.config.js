/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            md: "600px",
            lg: "768px",
        },
    },
    plugins: [],
    darkMode: 'class'
};
