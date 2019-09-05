import React from 'react';
import './messageInput.css';

export default class MessageInput extends React.Component {
    constructor() {
        super();
        this.state = {
          message: ""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({
          message: event.target.value
        });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.props.sendMessage(this.state);
        this.setState({
          message: ""
        });
      }
      render() {
        return (
          <form className="sendMessage-input" onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.message}
              placeholder="write your message"
            />
          </form>
        );
      }
}
