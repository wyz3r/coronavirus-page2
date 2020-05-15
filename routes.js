const routes = require('next-routes')


module.exports = routes()                           // ----   ----      -----
  .add('index', '/', 'index') 
  .add('post', '/post/:id', 'post')
  .add('login', '/login', 'login')
  .add('recopass', '/recopass', 'recopass')


  // name, route , page  
