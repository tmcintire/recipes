import React from 'react';
import { NavContainer } from '../nav/NavContainer';
import '../../../../styles/index.scss';

export const App = (props) => {
  return (
    <div>
      <NavContainer />
      <div className="main-wrapper">
        {props.children}
      </div>
    </div>
  );
};
