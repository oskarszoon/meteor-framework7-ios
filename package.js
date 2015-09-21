Package.describe({
    name: 'loftsteinn:framework7-ios',
    version: '1.2.0',
    summary: 'Framework7 v1.2.0 for Meteor using the iOS theme',
    git: 'https://github.com/oskarszoon/meteor-framework7-ios',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.add_files('framework7/dist/js/framework7.js', 'client');

    api.add_files([
        'framework7/dist/css/framework7.ios.css',
        'framework7/dist/css/framework7.ios.colors.css'
    ], 'client');

    api.add_files([
        'framework7/dist/img/i-f7-ios.png',
        'framework7/dist/img/i-form-calendar-ios.svg',
        'framework7/dist/img/i-form-comment-ios.svg',
        'framework7/dist/img/i-form-email-ios.svg',
        'framework7/dist/img/i-form-gender-ios.svg',
        'framework7/dist/img/i-form-name-ios.svg',
        'framework7/dist/img/i-form-password-ios.svg',
        'framework7/dist/img/i-form-settings-ios.svg',
        'framework7/dist/img/i-form-tel-ios.svg',
        'framework7/dist/img/i-form-toggle-ios.svg',
        'framework7/dist/img/i-form-url-ios.svg'
    ], 'client');
});
