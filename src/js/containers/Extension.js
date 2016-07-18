import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

const style = require('../../sass/main.sass');

import {
  Header,
  Notification,
} from '../components';

import {
  ModSelect,
  Stats,
  Result,
} from '.';

@connect(state => ({
  hidden: state.get('hidden'),
  disabled: state.get('disabled'),
  loading: state.get('loading'),
}))
export default class Extension extends React.Component {
  render() {
    const baseClassNames = classNames(
      style.rootClass,
      {
        'hidden': this.props.hidden,
        'disabled': this.props.disabled,
      }
    );

    const containerClassNames = classNames(
      'container',
      {
        'loading': this.props.loading,
      }
    );

    return (
      <div className={baseClassNames}>
        <div className={containerClassNames}>
          <div className="spinner"></div>
          <Notification />
          <Header />
          <Stats />
          <ModSelect />
          <Result />
        </div>
      </div>
    );
  }
}
