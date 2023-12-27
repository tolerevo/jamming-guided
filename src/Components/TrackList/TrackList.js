import React from 'react';
import './TrackList.css';
import Track from '../Track/Track.js';

function TrackList() {
  return (
    <div className="TrackList">
      <Track />
      <Track />
      <Track />
      {/*<!-- You will add a map method that renders a set of Track components  -->*/}
    </div>
  );
}

export default TrackList;