import React from 'react';

const TrackFilter = () => {
  const tracks = [
    'Full-Stack Web',
    'iOS Development',
    'Android Development',
    'Data Science',
    'UI/UX Design'
  ];

  return (
    <div className="track-filter-container">
      <div className="tracks">
        {tracks.map((track, index) => (
          <Track
            handleSelectTrack={handleSelectTrack}
            key={index}
            track={track}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * Toggle `is-active` class
 * @TODO change display results depending on user selections
 * @TODO unselect `all` when another is selected
 * @todo select `all` when no other tracks selected
 */
function handleSelectTrack(event) {
  event.preventDefault();
  console.log('handleSelectTrack event: ', event.target);
  event.target.classList.toggle('is-active');
}

const Track = props => {
  return (
    <button
      className="track"
      id={props.track}
      onClick={props.handleSelectTrack}
    >
      {props.track}
    </button>
  );
};

export default TrackFilter;
