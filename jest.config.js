//jest.config.js
module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "^react-router-dom$": "<rootDir>/node_modules/react-router-dom",
    },
    setupFilesAfterEnv : ["<rootDir>/jest.setup.js"]
}