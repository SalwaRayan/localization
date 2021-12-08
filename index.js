const express = require('express')
const app = express()

const port = 5000

const engine = require('express-handlebars').engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static("public"));

const translation = require('./translation.json')


app.get('/:lang?', (req, res) => {
  const { lang } = req.params
  const langue = lang

  res.render('home', {
    langue,
    pageTitle: translation[langue].pageTitle,
    title: translation[langue].title,
  })
})

app.get('*', (req, res) => {
  res.send('page not found')
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})