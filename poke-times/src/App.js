import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

// function App() {, same thing as under
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        {/* Switch allows for only one route to show at a time */}
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/contact' component={ Contact } />
          {/* the colon allows you to specifc what you are looking for after '/' */}
          <Route path='/:post_id' component={ Post } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


// npm install react-router-dom : Call this command to allow for navigating throughout pages


// Redux is 'A Central Data Store' where global props can be accessed from different parts of the 
// component tree, seemlessly