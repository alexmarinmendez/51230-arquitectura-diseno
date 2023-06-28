const _userService = require('./userService')
const _anotherUserService = require('./userService')

_userService.addUser({ id: 3, name: 'Alex', lastname: 'Marin'})
console.log(_userService.getUsers())
console.log(_anotherUserService.getUsers())