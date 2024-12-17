const jsonServer = require('json-server')
const axios = require('axios')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const port = 5005
server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log(`JSON Server is running at port ${port}`)

  setInterval(() => {
    axios
      .get(
        `https://tm-jason-server-mock.onrender.com/products?price_gte=20&price_lte=25&_sort=price&_order=asc&_limit=1`,
      )
      .then((response) => {
        console.log('Pinged server to keep it active')
      })
      .catch((error) => {
        console.error('Error pinging server:', error)
      })
  }, 5 * 60 * 1000) // 5 minutes
  // 5 * 60 * 1000) // 5 minutes
})
