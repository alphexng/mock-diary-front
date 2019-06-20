import React,{ Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import SingleEntry from './containers/SingleEntry/SingleEntry';

class App extends Component {
  render(){
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/single-entry" component={SingleEntry} />
      </Switch>
    );
  }
}
export default App;
