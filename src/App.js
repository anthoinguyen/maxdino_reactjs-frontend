import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import Signin from "./containers/signin";
import Signup from "./containers/signup";
import RequestResetPassword from "./containers/requestResetPassword";
import ResetPassword from "./containers/resetPassword";
import CreateUser from "./containers/createUser";
import ChangePassword from "./containers/changePassword";
import Learn from "./containers/learnPage";
import LearnDetail from "./containers/learnDetailPage";
import ShowHeader from './components/showHeader';
import AskPage from './containers/askPage';
import ErrorPage from "./components/notFound";
import InternalError from "./components/internalError";
import { history } from "./redux";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <ShowHeader />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/change-password" exact component={ChangePassword} />
        <Route path="/request-reset-password" exact component={RequestResetPassword} />
        <Route path="/accept/reset-password/:token" exact component={ResetPassword} />
        <Route path="/request/create-user/:token" exact component={CreateUser} />
        <Route path="/learn" exact component={Learn} />
        <Route path="/learn/:id" exact component={LearnDetail} />
        <Route path="/" exact component={Signin} />
        <Route path="/404" exact component={ErrorPage} />
        <Route path="/500" exact component={InternalError} />
      </Router>
    );
  }
}

export default App;
