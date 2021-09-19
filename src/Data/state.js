
let store = {
    _state: {
        navbar: {
            friends: [
                {name: 'Bill', ava: 'friend1.jpg'},
                {name: 'John', ava: 'friend2.jpg'},
                {name: 'Alex', ava: 'friend3.png'},
            ]
        },
        profilePage: {
            postItems: [
                {name: 'some guy', message: "Any message", likes: 1},
                {name: 'Elon Musk', message: "Lorem Ipsum", likes: 3},
                {name: 'Elon Musk', message: "Anything else", likes: 2},
                {name: 'Elon Musk', message: "Elon Musk is really great inventor and entrepreneur", likes: 15},
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogNames: [
                {name: 'Иван Иванов', id: 1},
                {name: 'Илон Маск', id: 2},
                {name: 'Билл Гейтс', id: 3}
            ],  

        
            messageItems: [
                {message: 'Привет', id: 1},
                {message: 'Го на Марс', id: 2},
                {message: 'Где мой чип?', id: 3}
            ],
            newMessageText: ''
        }
    },

    addPost(postText) {
        let newPost = {
            message: postText,
            id: 4,
            likes: 0 
        }

        this._state.profilePage.postItems.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this.rerenderTree(this._state)
        // console.log(state)
    },

    addMessage(messageText) {
        let newMessage = {
            message: messageText,
            id: 4,
        }

        this._state.dialogsPage.messageItems.unshift(newMessage)
        this._state.dialogsPage.newMessageText = '';
        this.rerenderTree(this._state)
        // console.log(state)
    },

    onPostChange(text) {
        this._state.profilePage.newPostText = text
        this.rerenderTree(this._state)
    },

    onMessageChange(text) {
        this._state.dialogsPage.newMessageText = text
        this.rerenderTree(this._state)
    },

    rerenderTree() {
        console.log("It's fake")
    },

    subscribe (observer) {
        this.rerenderTree = observer
    },

    getState() {
        return this._state
    }
}
export default store;