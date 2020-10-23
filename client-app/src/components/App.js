import React, { Component } from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StremDelete";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history} >
          <Header />
          <Route exact path="/" component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
          <Route path="/streams/show/:id" component={StreamShow} />
        </Router>
      </div>
    );
  }
}

export default App;

// 1086526354886-5s6vfmispi423i8p9dv1qsb48vd8hnou.apps.googleusercontent.com
