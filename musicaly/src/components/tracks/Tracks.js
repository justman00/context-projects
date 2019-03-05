import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import Track from "./Track";

export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { track_list, heading } = value;
          if (track_list.length === 0 || track_list === undefined) {
            return <Spinner />;
          } else {
            return (
              <>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {track_list.map(track => (
                    <Track track={track.track} key={track.track.track_id} />
                  ))}
                </div>
              </>
            );
          }
        }}
      </Consumer>
    );
  }
}
