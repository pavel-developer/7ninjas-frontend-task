import React, { Component } from 'react';
import logo from '../assets/img/7ninjas-logo-dark.jpg';
import styles from '../styles/main.module.scss';

class MainContainer extends Component {
  render() {
    const {children} = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <img src={logo} alt="7ninjas"/>
          <h1>Front-End Developer</h1>
        </div>
        <div className={styles.bottom}>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;