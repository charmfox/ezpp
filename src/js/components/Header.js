import React from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  beatmap: state.get('beatmap'),
  cover: state.get('beatmapCover'),
}))
export default class Header extends React.Component {
  render() {
    const beatmap = this.props.beatmap;
    return (
      <div className="header" style={{ backgroundImage: `url(${this.props.cover})` }}>
        <span>{`${beatmap.Artist} - ${beatmap.Title} [${beatmap.Version}]`}</span>
      </div>
    );
  }
}
