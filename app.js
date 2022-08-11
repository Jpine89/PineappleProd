phoneApi.getAddonFile('index.html', (index) => {
    phoneApi.registerApp({
        name: 'PineappleProdApp',
        path: 'test',
        icon: 'fas fa-circle-chevron-up',
        iconColour: '#FFFFFF',
        iconBackground: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        headerColour: 'rgba(2,0,36,1)',
        installedByDefault: false,
    }, index);
});

phoneApi.subscribe('appLaunched', (a) => {
    console.log(`[Example Addon] App Loaded: ${a.app}`);
    setTimeout(() => {
        $('#child').text('Child');
    }, 1500);
});

phoneApi.db.search('messages', {query:{match:{chatId:'KJvH3HkB6yExEXbjT6Lm'}}}).then((data) => console.log('Some chat data examples', data));

window.phoneApi = phoneApi; // allow you to mess around with the phoneApi directly in console
window.testSuggestedContact = (t) => {
    window.postMessage({
        type: 'notification',
        notif: {
            icon: 'fas fa-address-book',
            message: t ? 'A long name with multiple lines of text. A long name with multiple lines of text. A long name with multiple lines of text. ' : 'Owen Heap',
            title: 'New Suggested Contact',
            group: 'Contacts',
            type: 'contacts',
            params: {
                suggestedName: 'Owen Heap',
                suggestedNumber: '04812574812'
            }
        }
    })
};