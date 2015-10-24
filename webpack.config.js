module.exports = {
    entry: './app/index.js',
    output: {
        path: './assets',
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css' }
        ]
    }
};
