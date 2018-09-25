var socket = io();
socket.on('connect', function() {
    console.log('conectado al servidor');
});
// escuchar succesos
socket.on('disconnect', function() {
        console.log('perdimos conexión');
    })
    // emita para enviar info
socket.emit('enviarMensaje', {
    usuario: 'fernando',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});
socket.on('enviarMensaje', function(mensjae) {
    console.log(mensjae);
})