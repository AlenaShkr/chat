import React from 'react';

import uniqid from 'uniqid';
import './messageList.css';

function toISODate(milliseconds) {
    let date = new Date(milliseconds);
    let y = date.getFullYear()
    let m = date.getMonth() + 1;
    let d = date.getDate();
    let h = date.getHours();
    let min = date.getMinutes();
    m = (m < 10) ? '0' + m : m;
    d = (d < 10) ? '0' + d : d;
    h = (h < 10) ? '0' + h : h;
    min = (min < 10) ? '0' + min : min;

    return `${d}-${m}-${y}  ${h}:${min}`;
}

export default class MessageList extends React.Component {
  render () {
    return (
        <div className="message-list">
        <ul>
          {this.props.messages.map(message => {
            return (
              <li key={uniqid()}>
                <div className="message-list-name">{message.from}
                </div>
                <div className="message-list-text">{message.message}
                <span>{toISODate(message.time)}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
}
