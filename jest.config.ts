
module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts'],
    preset: 'ts-jest',
    testEnvironment: "jsdom",
    transform: {
        '^.+\\.vue$': 'vue3-jest',
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
            'jest-transform-stub',
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },

    moduleNameMapper: {
        "@/(.*)$": "<rootDir>/src/$1",
    },
    snapshotSerializers: ['jest-serializer-vue'],
    transformIgnorePatterns: ['<rootDir>/node_modules/']
}