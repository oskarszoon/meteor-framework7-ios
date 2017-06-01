Package.describe({
    name: 'loftsteinn:framework7-ios',
    version: '1.6.4',
    summary: 'Framework7 v1.6.4 for Meteor using the iOS design theme',
    git: 'https://github.com/oskarszoon/meteor-framework7-ios',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.addFiles('framework7/dist/js/framework7.js', 'client');

    api.addFiles([
        'framework7/dist/css/framework7.ios.css',
        'framework7/dist/css/framework7.ios.colors.css'
    ], 'client');

    api.addAssets([
        'framework7/dist/img/i-f7-ios.png'
    ], 'client');
});
