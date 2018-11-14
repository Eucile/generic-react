import React from "react";
import Header from "./Header";
import ContentContainer from "./ContentContainer";
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {


  render() {
    return (
      <div>
        <style global jsx>{`
        * {
          padding: 0;
          margin: 0;
        }
        `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' component={ContentContainer} />
          <Route path='/' component={ContentContainer} />
          <Route path='/' component={ContentContainer}/>
          <Route path='/' component={ContentContainer} />
          <Route path='/' component={ContentContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
