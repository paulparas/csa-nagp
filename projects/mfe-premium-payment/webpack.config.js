const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfePremiumPayment',

  exposes: {
    './Module': './projects/mfe-premium-payment/src/app/premium-payment/premium-payment.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  } 

});

// module.exports = {
//     devServer: {
//         historyApiFallback: true,
//         headers: {
//           "Access-Control-Allow-Origin": "*",
//           "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
//           "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
//         }
//         },
//     };
