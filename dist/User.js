class User {
    constructor(name) {
        this.name = name
    }

    sendMessage(message, to) {
        return $.post('/message', { sender: this.name, text: message, to })
    }
}