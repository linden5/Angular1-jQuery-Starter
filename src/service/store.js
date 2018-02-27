export default class Store {
    constructor(config) {
        this._state = config.state;
        this._mutation = config.mutation;
    }

    commit(mutationName, val) {
        console.log(this)
        this._mutation[mutationName](val, this._state);
    }

    get state() {
        return this._state;
    }

    get mutation() {
        return this._mutation;
    }
}