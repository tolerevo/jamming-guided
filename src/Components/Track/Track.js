import React from 'react';
import './Track.css';


function Track() {
  const renderAction = () => {
    if ({/*isRemoval*/}) {
      return (
        <button className='Track-action'>
          -
        </button>
      );
    }
    return (
      <button className='Track-action'>
        +
      </button>
    );
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{/*{track.name}*/}</h3>
        <p>{/*track.artist} | {track.album*/}</p>
      </div>
      <button className="Track-action">{renderAction()}</button>
    </div>
  );
}

export default Track;