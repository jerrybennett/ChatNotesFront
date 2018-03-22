class MessagesApi {

  static fetchMessages() {
    return fetch(`http://localhost:3000/api/v1/messages`)
    .then(res => res.json());
  }

  static addMessage(message) {
    // console.log("ADAPTER", message)
    return fetch(`http://localhost:3000/api/v1/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        text: message,
        user_id: 1,
        chat_room_id: 1
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
  
}
export default MessagesApi;
