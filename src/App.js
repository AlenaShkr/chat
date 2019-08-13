import React from 'react';

import './App.css';

import Header from './components/header/Header';
import MessageList from './components/MessageList/MessageList';
import MessageInput from './components/MessageInput/MessageInput';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <MessageList></MessageList>
        <MessageInput></MessageInput>
      </main>
    </div>
  );
}

export default App;
