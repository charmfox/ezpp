import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

const style = require('../../sass/main.sass');

import {
  Header,
  Notification,
  ResultBox,
} from '../components';

import {
  ModSelect,
  Stats,
} from '.';

@connect(state => ({
  active: state.get('active'),
}))
export default class Extension extends React.Component {
  render() {
    return (
      <div className={classNames(style.rootClass, { 'active': this.props.active })}>
        <div className="container">
          <Notification />
          <Header />
          <Stats />
          <ModSelect />
          <ResultBox />
        </div>
      </div>
    );
  }
}
