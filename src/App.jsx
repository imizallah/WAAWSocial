import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import Timeline from "./components/pages/timeline/Timeline";
import { Toaster } from 'react-hot-toast';

 
function App() {
 
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Timeline}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
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
