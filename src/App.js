import React from 'react';

import './App.css';

import Header from './components/header/Header';
import MessageList from './components/MessageList/MessageList';
import MessageInput from './components/MessageInput/MessageInput';


  const url = "ws://st-chat.shas.tel";

  class App extends React.Component {
    state = {
        from: "blaaa!",
        messages: []
      };
  
    ws = new WebSocket(url);

    componentDidMount() {
        this.ws.onopen = () => {
            console.log('connected');
          }
          this.ws.onmessage = evt => {
            const message = JSON.parse(evt.data);
            window.console.log(message);
            this.addMessage(message[0]);
          }
      
          this.ws.onclose = () => {
            console.log('disconnected');
            this.setState({
              ws: new WebSocket(URL),
            })
          }
        }

    addMessage = message =>
        this.setState(state => ({ messages: [...state.messages, message] }))

    sendMessage(text) {
      console.log(text);
    };

    render() {
      return (
        <div className="App">
          <Header />
          <main>
            <MessageList messages={this.state.messages} />
            <MessageInput sendMessage={this.sendMessage} />
          </main>
        </div>
      );
    };
  }
    

export default App;
