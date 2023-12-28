import React from 'react';
import './TrackList.css';
import Track from '../Track/Track.js';

function TrackList() {
  return (
    <div className="TrackList">
      {/*Track.map((track) => {*/}
       {/* return ( */}
          <>
           <Track />
           <Track />
           <Track />
          </>
        {/*);*/}
    </div>
  );
}

export default TrackList;