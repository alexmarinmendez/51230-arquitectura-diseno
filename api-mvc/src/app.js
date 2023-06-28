import express from 'express'
import handlebars from 'express-handlebars'
import usersRouter from './routers/users.router.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs'
}))
app.set('views', './src/views')
app.set('view engine', 'hbs')

app.use('/users', usersRouter)

app.listen(8080, () => console.log('Server Up!'))