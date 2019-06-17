/**
 * Initializes the payment request object.
 * @return {PaymentRequest} The payment request object.
 */
function buildPaymentRequest() {
  if (!window.PaymentRequest) {
    return null;
  }

  const supportedInstruments = [{
      supportedMethods: 'https://webauthn-pay.herokuapp.com/pay/',
      //supportedMethods: 'http://localhost:3000/pay/',
      data: {
        'merchantName': 'Webauthn-pay web-shop'
      }
  }];
  
  const details = {
    total: {
      label: 'Donation',
      amount: {
        currency: 'EUR',
        value: '1.00',
      },
    },
  };

  let request = null;

  try {
    request = new PaymentRequest(supportedInstruments, details);
    if (request.canMakePayment) {
      request.canMakePayment().then(function(result) {
        info(result ? 'Can make payment' : 'Cannot make payment');
      }).catch(function(err) {
        error(err);
      });
    }
  } catch (e) {
    error('Developer mistake: \'' + e + '\'');
  }

  return request;
}

let request = buildPaymentRequest(1);

/**
 * Launches payment request that does not require shipping.
 */
function onBuyClicked() {
  if (!window.PaymentRequest || !request) {
    error('PaymentRequest API is not supported.');
    return;
  }

  request = buildPaymentRequest();

  try {
    request.show()
        .then(resp => {
            return resp.complete('success').then(() => resp);
        })
        .then(resp => {
            done('This is a demo website. No payment will be processed.', resp)
            return resp;
        })
        .catch(e => {
            error(e);
            request = buildPaymentRequest();
        })
  } catch (e) {
    error('Developer mistake: \'' + e + '\'');
    request = buildPaymentRequest();
  }
}
