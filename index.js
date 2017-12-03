class SimpleEmitter {
    constructor() {
        this._events = new Map();
    }
    _has(eventName){
        return this._events.has(eventName)
    }
    _logError(message) {
        throw Error(message)
    }
    on(eventName, fn) {
        if(!this._has(eventName)){
            return this._events.set(eventName, fn)
        }
        return this._logError(`${eventName} already set`)
    }
    emit(eventName){
        if(this._has(eventName)) {
            return this._events.get(eventName)()
        }
        else {
            return this._logError(`No event with ${eventName} has been set`)
        }
    }
    off(eventName){
        if(this._has(eventName)){
            return this._events.delete(eventName)
        }
        return this._logError(`No event with ${eventName} registered`)
    }
}

export default SimpleEmitter;
