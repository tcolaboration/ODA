'use strict';
//test
// Set client auth mode - true to enable client auth, false to disable it
const isClientAuthEnabled = false;
const BaseComponent = require("https://cdn.jsdelivr.net/gh/tcolaboration/ODA@main/web-sdk");
/**
 * Initializes the SDK and sets a global field with passed name for which
 * it can be referred to later.
 *
 * @param {string} name Name by which the chat widget should be referred
 */
const initSdk = (name) => {
    if (!name) {
        name = 'Bots';          // Set default reference name to 'Bots'
    }
    let Bots;

    setTimeout(() => {
        /**
            * SDK configuration settings
            * Other than URI, all fields are optional with two exceptions for auth modes
            * In client auth disabled mode, 'channelId' must be passed, 'userId' is optional
            * In client auth enabled mode, 'clientAuthEnabled: true' must be passed
            */
        let chatWidgetSettings = {
            URI: 'oda-2ab8a01762184155804e809ec285e636-da3.data.digitalassistant.oci.oraclecloud.com',
            clientAuthEnabled: isClientAuthEnabled,
            channelId: 'fad4c4d1-e921-460b-9913-9036aa07f2a9' 
        };

        // Initialize SDK
        if (isClientAuthEnabled) {
            Bots = new WebSDK(chatWidgetSettings, generateToken);
        } else {
            Bots = new BaseComponent.WebSDK(chatWidgetSettings);
        }

        // Connect to the ODA
        Bots.connect();

        // Create global object to refer Bots
        window[name] = Bots;
    }, 0);
};
