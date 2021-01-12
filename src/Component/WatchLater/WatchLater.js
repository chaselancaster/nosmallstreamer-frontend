import React, { Component } from "react";
import { ReactComponent as ExternalLink } from "../../assets/externalLink.svg";
import { ReactComponent as Trash } from "../../assets/trash.svg";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";

import "./WatchLater.css";

import * as routes from "../../constants/routes";

class WatchLater extends Component {
  static contextType = UserContext;

  state = {
    message: "",
  };

  deleteStreamer = async (streamer) => {
    const user = this.context;
    try {
      const deleteStreamerCall = await fetch(
        `${routes.HEROKU}/users/watchlater/${user._id}/${streamer.name}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const parsedCall = await deleteStreamerCall.json();
      if (parsedCall) {
        this.props.doSetCurrentUser(parsedCall.user);
      }
    } catch (err) {
      this.setState({
        message: "Unable to delete streamer.",
      });
    }
  };

  checkForUser = (user) => {
    if (user) {
      return (
        <div>
          {user.watchLater.length !== 0 ? (
            <div className="watchlater-container">
              <div className="watchlater-header">
                <h1>Watch Later</h1>
              </div>
              <div className="streamers-wl">
                {user.watchLater.map((streamer) => {
                  return (
                    <li className="streamer-wl">
                      <div className="streamer-info-wl">
                        <div className="streamer-image-name-wl">
                          <img src={streamer.profile_image_url} />
                          <p className="streamer-name-wl">{streamer.name}</p>
                        </div>
                        <div className="buttons-wl">
                          <a
                            href={`http://twitch.tv/${streamer.name}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ExternalLink className="external-link-wl button-wl" />
                          </a>
                          <Trash
                            onClick={() => this.deleteStreamer(streamer)}
                            className="trash-wl button-wl"
                          />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </div>
            </div>
          ) : (
            <h1 className="empty-wl">
              Your watch later list is currently empty!
            </h1>
          )}
        </div>
      );
    } else {
      return (
        <div className="loggedout-wl">
          <h1>Please sign in or register to view you watch later list!</h1>
          <Link to="login" className="profile-link">
            <button className="button">Login</button>
          </Link>
          <Link to="register" className="profile-link">
            <button className="button">Register</button>
          </Link>
        </div>
      );
    }
  };

  render() {
    const user = this.context;
    return <div>{this.checkForUser(user)}</div>;
  }
}

export default WatchLater;
