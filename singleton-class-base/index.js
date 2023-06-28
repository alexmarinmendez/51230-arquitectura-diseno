const UserService = require('./userService')

const _userService = new UserService()
const _anotherUserService = new UserService()

_userService.addUser({ id: 3, name: 'Alex', lastname: 'Marin'})
console.log(_userService.getUsers())
console.log(_anotherUserService.getUsers())