const webpack = require('webpack');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        alias: {
            Main: __dirname + '/app/components/Main.jsx',
            Nav: __dirname + '/app/components/Nav.jsx',
            Weather: __dirname + '/app/components/Weather.jsx',
            About: __dirname + '/app/components/About.jsx',
            Examples: __dirname + '/app/components/Examples.jsx',
            WeatherForm: __dirname + '/app/components/WeatherForm.jsx',
            WeatherMessage: __dirname + '/app/components/WeatherMessage.jsx',
            openWeatherMap: __dirname + '/app/api/openWeatherMap.jsx',
            ErrorModal: __dirname + '/app/components/ErrorModal.jsx',
            applicationStyles: __dirname + '/app/styles/app.scss'
        },
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
        
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-0'],
                    cacheDirectory: true
                }
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
