class UsersMem {
    constructor() {
        this.users = [
            { nombre: 'Juan', apellido: 'Martin', dni: '123' },
            { nombre: 'Alex', apellido: 'Marin', dni:'456' },
        ]
    }

    findAll = () => {
        return this.users
    }

    create = (user) => {
        this.users.push(user)
    }
}

export default new UsersMem()