import React, { Component } from "react";
import YoutubeEmbed from "./YoutubeEmbeded";
import { Button } from "@material-ui/core";
import "./style.css";

class Home extends Component {
  componentDidMount() {
    this.props.fetchUser("/");
  }

  render() {
    return (
      <div className="container">
        <h2 className="headings" id="welcome">
          Welcome to Crash Mob !
        </h2>
        <p className="home">
          Crash Mob is a website designed to take your Tabletop Role Playing
          experience to another level. With step through character creation and
          character storage never lose track of your characters or their
          charactersheet information again. Crash Mob was built for all of us
          nerds who spend months on a single campaign, we've made it easy to
          keep track of everything. So what are you waiting for?
        </p>

        <Button
          id="button"
          color="primary"
          size="large"
          onClick={() => (window.location.href = "/auth/login")}
        >
          GET STARTED!!
        </Button>

        <YoutubeEmbed embedId="BgvHNlgmKro" />
      </div>
    );
  }
}

export default Home;
