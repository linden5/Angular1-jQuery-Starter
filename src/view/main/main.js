export default {
    name: 'main',
    url: '/main',
    template: require('./main.html'),
    controller:  [function() {
        console.log('main')
    }]
}