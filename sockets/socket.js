const { io } = require('../index');

// Mensajes de Sockets 
io.on('connection', client => {
    console.log('Cliente conectado');
    //client.on('event', data => { /* … */ });
    client.on('disconnect', () => { 
         console.log('Cliente desconectado')
     });

     client.on('message', ( payload ) => {
          console.log('Mensaje ', payload);  

          io.emit('mensaje', {admin: 'NewMessage'});
     });
  });
