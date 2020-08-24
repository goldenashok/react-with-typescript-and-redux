import React from 'react';
import store from './configuration/sotre';
import './App.css';
import UserList from './user-list/User-list';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <UserList/>
    </div>
    </Provider>
  );
}

export default App;
