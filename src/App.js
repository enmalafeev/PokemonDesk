import React from 'react';
import './index.css';
import cn from 'classnames';

import s from './App.modules.scss';
import './custom.css';

const App = () => {
  return (
    <div className={cn(s.header, 'green')}>
      This is work! This is App Component!
    </div>
  )
};

export default App;