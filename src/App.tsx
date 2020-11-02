import React from 'react';
import './index.css';
import cn from 'classnames';

import s from './App.module.scss';
import { concat } from './example';

const App: React.FC = () => {
  return (
    <>
      <div className={cn(s.header, 'green')}>
        This is work! This is App TS Component!
      </div>
      <p>{concat('Hello ', 'world!')}</p>
    </>
  )
};

export default App;