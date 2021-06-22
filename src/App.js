import './App.css';
import Mark from './Components/markAssignment';
import Upload from './Components/uploadAssignment';
import Delete from './Components/deleteAssignment';
import Submit from './Components/submitAssignment';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route to='/'> <Upload /> </Route>
          <Route to='/submit'> <Submit /> </Route>
          <Route to='/mark'> <Mark /> </Route>
          <Route to='/delete'> <Delete /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
