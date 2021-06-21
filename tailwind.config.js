module.exports = {
    mode: "jit",
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#2a75bb',
                secondary: '#3c5aa6',
            },
            fontFamily: {
                'bangers': ['"Bangers"', 'cursive'],
                'poppins': ['"Inter"', 'sans-serif']
            },
            screens: {
                'mq-max-3xl': {'max': '1910px'},
                'mq-max-2xl': {'max': '1535px'},
                'mq-max-xl': {'max': '1279px'},
                'mq-max-lg': {'max': '1023px'},
                'mq-max-md': {'max': '767px'},
                'mq-max-sm': {'max': '639px'}
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
