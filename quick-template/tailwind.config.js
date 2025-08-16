/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "media", // Usa el modo claro/oscuro según la preferencia del sistema
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1a2236',      // Azul oscuro elegante (claro)
                    dark: '#4f5d75',         // Gris azulado elegante (oscuro)
                },
                secondary: {
                    DEFAULT: '#e94560',      // Rojo elegante (claro)
                    dark: '#efb1b2',        // Rosa pálido elegante (oscuro)
                },
                accent: {
                    DEFAULT: '#0f3460',      // Azul profundo (claro)
                    dark: '#162447',         // Azul profundo (oscuro)
                },
                success: {
                    DEFAULT: '#43aa8b',      // Verde elegante (claro)
                    dark: '#90be6d',         // Verde suave (oscuro)
                },
                warning: {
                    DEFAULT: '#ffd166',      // Amarillo elegante (claro)
                    dark: '#f9c74f',         // Amarillo suave (oscuro)
                },
                error: {
                    DEFAULT: '#e63946',      // Rojo elegante (claro)
                    dark: '#ff6b6b',         // Rojo suave (oscuro)
                },
                info: {
                    DEFAULT: '#3a86ff',      // Azul vibrante (claro)
                    dark: '#4361ee',         // Azul vibrante (oscuro)
                },
                background: {
                    DEFAULT: '#f7f7fa',      // Gris claro elegante (claro)
                    dark: '#232946',         // Azul grisáceo elegante (oscuro)
                },
                surface: {
                    DEFAULT: '#fff',         // Blanco (claro)
                    dark: '#121629',         // Azul muy oscuro (oscuro)
                },
                text: {
                    DEFAULT: '#22223b',      // Gris oscuro elegante (claro)
                    dark: '#eaeaea',         // Gris claro elegante (oscuro)
                },
                border: {
                    DEFAULT: '#d1d9e6',      // Gris suave (claro)
                    dark: '#393e46',         // Gris oscuro (oscuro)
                },
                muted: {
                    DEFAULT: '#e5e5e5',      // Gris muy claro (claro)
                    dark: '#393e46',         // Gris oscuro (oscuro)
                },
                header: {
                    bg: '#1a2236',           // Azul oscuro elegante
                    text: '#fff',
                },
                footer: {
                    bg: '#232946',           // Azul grisáceo elegante
                    text: '#eaeaea',
                },
            },
        },
    },
    plugins: [],
}
