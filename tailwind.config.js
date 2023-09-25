/** @type {import(tailwindcss).Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xl: { min: "1024px" },
        // => @media and (min-width: 1024px) and (max-width: 1279px)

        lg: { min: "768px", max: "1023px" },
        // Tablets
        // => @media and (min-width: 768px) and (max-width: 1023px)

        md: { min: "426px", max: "767px" },
        // => @media and (min-width: 426px) and (max-width: 767px)

        sm: { min: "300px", max: "425px" },
        // => @media and (min-width: 300px) and (max-width: 425px)

        xs: { max: "300px" },
        // => @media and (max-width: 300px)
      },
      colors: {
        verde: 'rgba(72, 208, 176, 1)',
        body: 'rgba(220, 10, 45, 1)',
        roxo: 'rgba(108, 122, 220, 1)',
        normal: 'rgba(170, 166, 127, 1)',
        fire: 'rgba(245, 125, 49, 1)',
        water: 'rgba(100, 147, 235, 1)',
        grass: 'rgba(116, 203, 72, 1)',
        electric: 'rgba(249, 207, 48, 1)',
        ice: 'rgba(154, 214, 223, 1)',
        ground: 'rgba(222, 193, 107, 1)',
        flying: 'rgba(168, 145, 236, 1)',
        poison: 'rgba(164, 62, 158, 1)',
        fighting: 'rgba(193, 34, 57, 1)',
        psychic: 'rgba(251, 85, 132, 1)',
        dark: 'rgba(117, 87, 76, 1)',
        rock: 'rgba(182, 158, 49, 1)',
        bug: 'rgba(167, 183, 35, 1)',
        ghost: 'rgba(112, 85, 155, 1)',
        steel: 'rgba(183, 185, 208, 1)',
        dragon: 'rgba(112, 55, 255, 1)',
        fairy: 'rgba(230, 158, 172, 1)'
      },
      spacing: {
        'section': 'calc(100vh - 3.5rem)',
      }
    },
  },

  plugins: [],
}
