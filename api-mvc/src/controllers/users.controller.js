import usersMem from "../models/usersMem.js"

export function getHTMLOnWire(req, res) {
    const users = usersMem.findAll()
    res.render('plantilla-html-onwire', {users})
}

export function postHTMLOnWire(req, res) {
    const user = req.body
    usersMem.create(user)
    res.redirect('/users/html-onwire')
}