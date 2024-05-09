const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    mode: 'development',

    entry:'./src/script.js',

    output:{
        filename:"bundle.js",
        path: path.resolve(__dirname,'dist'),
        clean:true,
    },

    // devtool:'inline-source-map',

    plugins:[new HtmlWebpackPlugin({
        template:'./src/index.html'
    })]
}