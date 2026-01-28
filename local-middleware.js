// Simple middleware for live-server to handle clean URLs
// This file is loaded by live-server to rewrite URLs without .html extension

const path = require('path');

module.exports = function (req, res, next) {
    const url = req.url.split('?')[0];
    const cleanUrl = url.length > 1 && url.endsWith('/') ? url.slice(0, -1) : url;

    const routes = {
        '/': '/index.html',
        '/index': '/index.html',
        '/about': '/about.html',
        '/contact': '/contact.html',
        '/lead-generation': '/lead-generation.html',
        '/privacy': '/privacy.html',
        '/terms': '/terms.html'
    };

    if (routes[cleanUrl]) {
        req.url = routes[cleanUrl];
    } else if (!path.extname(cleanUrl) && cleanUrl !== '/') {
        // Fallback for any other clean URL to its .html equivalent if it exists
        req.url = cleanUrl + '.html';
    }

    next();
};
