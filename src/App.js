import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListStoreComponent from './components/ListStoreComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateStoreComponent from './components/CreateStoreComponent';
import UpdateStoreComponent from './components/UpdateStoreComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
          <div className="container">  
            <Switch>
              <Route path="/stores" component={ListStoreComponent}></Route>
              <Route path="/add-store" component={CreateStoreComponent}></Route>
              <Route path="/update-store/:id" component={UpdateStoreComponent}></Route>
              <Route path="/" exact component={ListStoreComponent}></Route>
            </Switch>       
        </div>
      </Router>
    </div>
  );
}

export default App;
