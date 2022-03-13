import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Welcome from './pages/Welcome';
import {useHistory} from 'react-router-dom';
import RedirectPage from './pages/Redirecing';

function App() {
    const history = useHistory();
    return (
      <div>
        <main>
          <Switch>
          < Route path='/' exact>
              {(localStorage.getItem('access_token') && localStorage.getItem('access_token')!='undefined')?history.replace('/home'): (
                <div>
                  <b>You are not logged in</b>
                  <a href="https://calculator.auth.eu-west-1.amazoncognito.com/login?response_type=code&client_id=5s0821ekobplt0cti08dme3ced&redirect_uri=http://localhost:3000/welcome/">Sign in</a>
                </div>
              )}
            </Route>
            <Route path='/calculator'>
              <Calculator/>
            </Route>
            <Route path='/home/'>
              <Welcome/>
            </Route>
            <Route path='/welcome/'>
              <RedirectPage/>
            </Route>
          </Switch>
        </main>
      </div>
    ); 
}

export default App;
