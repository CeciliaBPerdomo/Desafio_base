/* 
npm init - y
npm install express socket.io
npm i ejs
npm i knex mysql
npm i knex sqlite3
*/

const express = require('express')
const app = express()

const routerProducto = express.Router()
const { listarProductos, agregarProducto } = require('./controllers/producto')
app.use('/api/producto', routerProducto)

app.use(express.urlencoded({ extended: true }))
app.set('views', './views')
app.set('view engine', 'ejs')

//app.use(express.static('public'))

/* Mostrar productos */
routerProducto.get('/listar', listarProductos)

/* Guardar productos */
routerProducto.post('/guardar', agregarProducto)

/*Server*/
const PORT = process.env.PORT || 8080
const srv = server.listen(PORT, () => {
    console.log(`Servidor Http con WebSockets escuchando en el puerto ${srv.address().port}`)
})
srv.on('error', error => console.log(`Error en el servidor ${error}`))
