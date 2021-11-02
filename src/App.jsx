import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import Timeline from "./components/pages/timeline/Timeline";
import { Toaster } from 'react-hot-toast';
import VerifyUser from "./components/pages/auth/VerifyUser";
import Profile from "./components/pages/profile/Profile";
import {useContext} from 'react';
import {AuthContext} from './context/AuthContext';

 
function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user ?
              <Timeline />
              : <Login />
            }
          </Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/verify-user" component={VerifyUser}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/profile" component={Profile}></Route>

        </Switch>
      </Router>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            color: 'white'
          },
          success: {
            style: {
              background: 'green',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
        }}
      />
    </>
  );
}

export default App;
