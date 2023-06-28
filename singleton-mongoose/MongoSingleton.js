import mongoose from "mongoose"

export default class MongoSingleton {
    static #instance

    constructor() {
        mongoose.connect('mongodb://localhost:27017')
    }

    static getInstance() {
        if (this.#instance) {
            console.log('Already connected!')
            return this.#instance
        }
        this.#instance = new MongoSingleton()
        console.log('Connected!')
        return this.#instance
    }
}