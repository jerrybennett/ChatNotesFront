class MessagesApi {
  static fetchMessages(message_id) {
    return fetch(`http://localhost:3000/api/v1/message/${message_id}`).then(res => res.json());
  }

  static postMessage(mess) {
    return fetch(`http://localhost:3000/api/v1/messages`, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: {
        message: mess
      }
    }).then(res => res.json())
  }
}
export default MessagesApi;
