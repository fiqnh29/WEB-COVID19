import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/homePages';

class App extends React.Component {
  state = {  }
  render() { 
    return (  
      <div>
        <Route path='/' component={Home}/>
      </div>
    );
  }
}
 
export default App;