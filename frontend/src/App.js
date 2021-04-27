import './App.css';
import Home from './views/Home';
import ListeMessage from './views/ListeMessage';
import Repondre from './views/Repondre';
import {Route ,BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {

  return (
    <Router>
    <div className="App">
         <Switch>
    <Route exact  path='/' component={Home} />
    <Route  path='/repondre/:id' component={Repondre} />
    <Route  path='/list' component={ListeMessage} />
         </Switch>
    </div>
    </Router>
  );
}

export default App;
