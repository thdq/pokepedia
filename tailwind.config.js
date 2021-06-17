module.exports = {
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
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
