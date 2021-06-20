
module.exports = {
    roots: ['<rootDir>'],
    modulePaths: ['<rootDir>'],
    moduleFileExtensions: [
        'ts',
        'js',
        'vue',
        'json'
    ],
    transform: {
        "^.+\\.ts$": "ts-jest",
        '^.+\\.js$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest'
    },
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/components/**/*.vue',
        '<rootDir>/pages/**/*.vue'
    ]
}
