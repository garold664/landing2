import {rerenderTree} from '../render'

let state = {
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
};

export let addPost = (postText) => {
    let newPost = {
        message: postText,
        id: 4,
        likes: 0 
    }

    state.profilePage.postItems.unshift(newPost)
    state.profilePage.newPostText = ''
    rerenderTree(state)
    // console.log(state)
}

export let addMessage = (messageText) => {
    let newMessage = {
        message: messageText,
        id: 4,
    }

    state.dialogsPage.messageItems.unshift(newMessage)
    state.dialogsPage.newMessageText = '';
    rerenderTree(state)
    // console.log(state)
}

export let onPostChange = (text) => {
    state.profilePage.newPostText = text
    rerenderTree(state)
}

export let onMessageChange = (text) => {
    state.dialogsPage.newMessageText = text
    rerenderTree(state)
}

export default state;