import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [user, setuser] = useState("Rahul");

  return (
    <div className="app">
      { !user ? (
          <h1>LOGIN</h1>
      ) : (
        <div className='app_body'>
          <Router>
            <Switch>
              <Route path='/rooms/:roomId'>
                <Sidebar/>
                <Chat />
              </Route>
              <Route path='/'>
                <Sidebar/>
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
