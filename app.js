// Include express form node_modules
const express = require('express')
const app = express()

// Define the server related variables
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

// Setting tamplate engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static page
app.use(express.static('public'))

// Handle request and response
app.get('/', (req, res) => {
    res.render('index', {restaurants: restaurantList.results})
})

app.get('/restaurants/:id', (req, res) => {
    const restaurant = restaurantList.results.find( restaurant => restaurant.id.toString() === req.params.id)
    res.render('show', {restaurant: restaurant})
})

app.get('/search', (req, res) => {
    const keyword = req.query.keyword
    const restaurants = restaurantList.results.filter( restaurant => restaurant.name_en.toLowerCase().includes(keyword.toLowerCase()) || restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(keyword.toLowerCase()))
    res.render('index', {restaurants: restaurants, keyword: req.query.keyword})
})

// Start and listen the server
app.listen(port, () => {
    console.log(`The Express server is on http://localhost:${port}`)
})