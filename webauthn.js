const express       = require('express');
const WebAuthn      = require('webauthn');

// Create webauthn
const webauthn = new WebAuthn({
    origin: 'https://webautnn-pay.herokuapp.com',
    //origin: 'http://localhost:3000',
    rpName: 'Webauthn-Pay merchant'
})

module.exports = webauthn.initialize();
