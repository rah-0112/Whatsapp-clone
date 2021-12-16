import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{ user, dispatch }] = useStateValue();

  return (
    <div className="app">
      { !user ? (
          <Login />
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
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
