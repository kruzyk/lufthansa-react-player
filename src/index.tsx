import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

window.React = React;
window.ReactDOM = ReactDOM;

const user = { imie: "Bob", pet: 'żyrafę', color: 'blue' }
const comments = [
  { id: "123", text: 'Love żyrafę' },
  { id: "234", text: 'Super Bob!' },
  { id: "345", text: 'I dont like blue' },
]

// let wynik = comments.map((item, index) => {
//   return React.createElement('div', { className: 'list-group-item' }, item.text)
// })

const vdiv2 = React.createElement('div', {
  id: 'user-card',
  className: 'm-4 card',
  style: { color: '#000', border: '1px solid', borderColor: user.color }
},
  React.createElement('div', { className: 'card-body' },
    React.createElement('h3', null, user.imie),
    React.createElement('p', null, user.imie + ' ma  ' + user.pet + ' '),
    React.createElement('div', { className: "list-group list-group-flush" },
      comments.map((item, index) => {
        return React.createElement('div', { className: 'list-group-item', key: item.id }, item.text)
      })
      // React.createElement('div', { className: 'list-group-item' }, 'Test'),
      // React.createElement('div', { className: 'list-group-item' }, 'Test'),
      // React.createElement('div', { className: 'list-group-item' }, 'Test')
    ),
    React.createElement('input', { placeholder: 'Dodaj komentarz' }))
)
ReactDOM.render(vdiv2, document.getElementById('root'))


export { }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
