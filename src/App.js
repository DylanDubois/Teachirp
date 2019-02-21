import React, { Component } from "react";
import "./App.scss";
import Home from "./pages/Home";
import WelcomePage from "./pages/Welcome/Welcome";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import CourseView from "./pages/CourseView";
import fire, { signInWithGoogle, signOut } from "./config/Fire";

class App extends Component {
  state = {
    selectedCourse: null,
    user: null,
    courses: null
  };

  componentDidMount() {
    this.authListener();
    this.coursesListener();
  }

  componentDidUpdate(nextprops) {
    console.log("update", this.state.courses);
  }

  courseSelectedHandler = course => {
    this.setState({ selectedCourse: course });
  };

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) this.setState({ user });
      else this.setState({ user: null });
    });
  };

  coursesListener = () => {
    const dbref = fire.database().ref("/courses/");
    dbref.on("value", snap => {
      this.setState({ courses: snap.val() });
    });
  };

  render() {
    const signedIn = this.state.user ? true : false;
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="h-100">
          <NavBar user={this.state.user} signOut={signOut} />
          {window.location.pathname.includes("course") &&
            !this.state.selectedCourse && <Redirect to="/" />}
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <WelcomePage
                  signIn={signInWithGoogle}
                  userSignedIn={signedIn}
                />
              )}
            />
            <Route
              path="/dashboard"
              exact
              render={() => (
                <Home
                  courseSelected={this.courseSelectedHandler}
                  courses={this.state.courses}
                />
              )}
            />
            {this.state.selectedCourse && (
              <Route
                path="/course"
                render={() => <CourseView course={this.state.selectedCourse} />}
              />
            )}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
