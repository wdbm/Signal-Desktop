/*global $, Whisper, Backbone, extension*/
/*
 * vim: ts=4:sw=4:expandtab
 */

// This script should only be included in background.html
(function () {
    'use strict';

    window.Whisper = window.Whisper || {};

    window.isOpen = function() {
        return true;
    };

    window.clearAttention = function() {
        extension.windows.clearAttention(inboxWindowId);
    };
    var inboxWindowId = 'inbox';

})();
