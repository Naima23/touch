import './App.css';
import Home from './views/Home';
import ListeMessage from './views/ListeMessage';
import {Route ,BrowserRouter as Router, Switch} from 'react-router-dom'
import Repondre from './views/Repondre';

function App() {

  return (
    <Router>
    <div className="App">
         <Switch>
    <Route  path='/repondre' component={Repondre} />
    <Route  path='/list' component={ListeMessage} />
    <Route  path='/' component={Home} />
         </Switch>
    </div>
    </Router>
  );
}

export default App;
