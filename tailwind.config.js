module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#f3123c',
                secondary: '#ff5d67',
            },
            fontFamily: {
                'bangers': ['"Bangers"', 'cursive']
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
