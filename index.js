const express  = require('express');
const session  = require('express-session');
const WebAuthn = require('webauthn');

const app = express();
app.use(express.static('public'));
app.use(session({secret: 'secret-vwhrsm8moed'}));
app.use(express.json());

// payment-method-side service
//app.head('/pay', function(req, res) {
app.all('/pay', function(req, res) {
  res.set('Link', '<payment-manifest.json>; rel="payment-method-manifest"');
  res.status(200).send('');
});

// Webauthn service
const webauthn = new WebAuthn({
    origin: 'https://webautnn-pay.herokuapp.com',
    //origin: 'http://localhost:3000',
    rpName: 'Webauthn-Pay merchant'
})
app.use('/webauthn', webauthn.initialize());

//
app.listen(process.env.PORT || 3000, () => {
    console.log('App listening on port 3000!');
});
