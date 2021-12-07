const express = require('express')
const app = express()

const port = 5000

const engine = require('express-handlebars').engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

const translation = require('./translation.json')

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})

app.get('/:lang?', (req, res) => {
  const { lang } = req.params
  const langue = "fr"

  res.render('home', {
    pageTitle: translation[langue].pageTitle,
    title: translation[langue].title,
  })
})

