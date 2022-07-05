module.exports = {
    entry: {
        bundle: "./src/script.ts"
    },
    output: {
        path: `${__dirname}/dist`,
        filename: "[name].js"
    },
    mode: "development",
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            }
        ]
    }
}
