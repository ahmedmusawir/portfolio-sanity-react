import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Components, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} classname={`app_container ${classNames}`}>
        <SocialMedia />
        <div className='app__wrapper app__flex'>
          <Components />

          <div className='copyright'>
            <p className='p-text'>@2020 MICHAEL</p>
            <p className='p-text'>All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
