# Webauthn UI and PaymentRequest APIs

### Issue with Webauthn UI in context of PaymentRequest.show() call

Webauthn UI ("signUp" button) on stand-alone page **works well**
* Goto https://webauthn-pay.herokuapp.com/pay/checkout

* Click **signUp** button

**Chrome-for-desktop doesn't show** Webauthn UI when **navigator.credentials.create()** is called in PaymentRequest window. 
But it works in e.g. **chrome-for-android**

* Goto https://webauthn-pay.herokuapp.com
* Press **Pay now** to open PaymentRequest UI
* Click **signUp** button in the opened window
* Chrome-for-desktop doesn't show Webauthn UI

### Install
Replace `https://webauthn-pay.herokuapp.com` with `http://localhost:3000`

`npm install`

`node index.js`
