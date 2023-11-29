window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    wsHost: window.location.hostname,
    wsPort: 6001,
    wssHost: window.location.hostname,
    wssPort: 6001,
    key: process.env.MIX_PUSHER_APP_KEY,
    disableStats: true,
    enabledTransports: ['ws'],
    forceTLS: false,

    // broadcaster: 'pusher',
    // key: process.env.MIX_PUSHER_APP_KEY,
    //cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    //host: window.location.hostname + ':6001',
    // wsHost: window.location.hostname,
    // forceTLS: false,
    // wsPort: 6001,
    // disableStats: true,
    // transports: ['websocket', 'polling', 'flashsocket'] // Fix CORS error!
    //httpHost: window.location.hostname,
    // wsHost: '127.0.0.01',
    // wssPort: 6001,
    // transports: ['websocket', 'polling', 'flashsocket']
});
