class MessagesApi {

  static fetchMessages() {
    return fetch(`http://localhost:3000/api/v1/messages`)
    .then(res => res.json());
  }

  static addMessage(message, room, userID) {
    // console.log("ADAPTER", message)
    return fetch(`http://localhost:3000/api/v1/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        text: message,
        user_id: userID,
        chat_room_id: room
      })
    }).then(res => res.json())
  }

  static addUser(user) {
    // console.log("Adapter", user);
    return fetch(`http://localhost:3000/api/v1/users`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user})
    }).then(res => res.json())
  }

  static logInUser(user) {
    // console.log("Adapter", user);
    return fetch(`http://localhost:3000/api/v1/users`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user})
    }).then(res => res.json())
  }

  static fetchChatrooms(){
    return fetch(`http://localhost:3000/api/v1/chat_rooms`)
      .then(res => res.json())
  }

  static addChatRoom(name) {
    // console.log("ADAPTER", message)
    return fetch(`http://localhost:3000/api/v1/chat_rooms`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name
      })
    }).then(res => res.json())
  }

  static getChatRoomMessages(id, userId) {
    return fetch(`http://localhost:3000/api/v1/chat_rooms/${id}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: userId
      })
    }).then(res => res.json())
  }

  static getChatRoomUsers(id) {
    return fetch(`http://localhost:3000/api/v1/users`)
      .then(res => res.json())
  }

  static getCurrentUser(id) {
    return fetch(`http://localhost:3000/api/v1/users/${id}`)
    .then(res => res.json())
  }

  static logInUser(user) {
    // console.log("Adapter", user);
    return fetch(`http://localhost:3000/api/v1/users`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user})
    }).then(res => res.json())
  }

  static addNote(title, text, room, userID) {
    // console.log("ADAPTER", message)
    return fetch(`http://localhost:3000/api/v1/notes`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        text: text,
        user_id: userID,
        chat_room_id: room
      })
    }).then(res => res.json())
  }

  static fetchNotes(id) {
    return fetch(`http://localhost:3000/api/v1/users/${id}/notes`)
    .then(res => res.json());
  }

  static updateNote(id, note) {
    return fetch(`http://localhost:3000/api/v1/notes/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({note})
    }).then(res => res.json())
  }

  static deleteNote(id) {
    return fetch(`http://localhost:3000/api/v1/notes/${id}`, {
      method: "DELETE",
    })
  }

}
export default MessagesApi;
