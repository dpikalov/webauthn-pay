// Check if service worker is available
if ('serviceWorker' in navigator) {
    // Register a service worker
    //navigator.serviceWorker.register('sw-pay2.js');
    //navigator.serviceWorker.register('sw.js', {scope: '/pay2'});
}

// debug only
const unregisterAllServiceWorkers = () => {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for(let registration of registrations) {
            registration.unregister()
         }
    })
}
