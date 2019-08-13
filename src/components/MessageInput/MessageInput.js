import React from 'react';
import './messageInput.css';

export default class MessageInput extends React.Component {
  render () {
    return (
      <form
      className="sendMessage-input"
      >
        <input
        type="text"
        value=""
        placeholder="write your message"
        ></input>
      </form>
    );
  }
  
}