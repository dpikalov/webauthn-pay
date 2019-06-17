# Webauthn UI and PaymentRequest APIs

This page shows an issue with *Webauthn UI* in context of *PaymentRequest.show()* call

Webauthn UI ("signUp" button) on stand-alone page **works well**
* Goto <a href="https://webauthn-pay.herokuapp.com/pay/checkout" target=_blank>/pay/checkout</a>

* Click **signUp** button

Webauthn UI in context of PaymentRequest UI **doesn't work** in chrome-for-desktop **but it works for e.g. chrome-for-android**

* Press **Pay now** to open PaymentRequest UI
* Click **signUp** button in the opened window
* e.openWindow (sw.js) fails with: **TypeError: Something went wrong while trying to open the window.**