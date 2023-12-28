import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import paintings from './paintings.json';

// function Painting({ url, title, profileUrl, author, price }) {
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор: <a href={profileUrl}>{author}</a>
//       </p>
//       <p>Ціна: {price} кредитів</p>
//       <p>Доступність: закінчується або є в наявності</p>
//       <button type="button">Додати у кошик</button>
//     </div>
//   );
// }
// const painting = paintings[1];
// <Painting
//   url={painting.url}
//   title={painting.title}
//   author={painting.author.tag}
//   profileUrl={painting.author.url}
//   price={painting.price}
// />;
ReactDOM.render(<App />, document.querySelector('#root'));

// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
