import React, { useState } from 'react';

import styles from '../styles/components/ControlBar.module.css';
import SwitchToggle from './SwitchToggle';
// import { SwitchButton } from './SwitchButton';

const ControlBar: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  function changeTheme() {
    setIsToggled(!isToggled);

    document.body.classList.toggle('dark-mode');
  }

  return (
    <div className={styles.container}>
      <figure>
        <img src="logo-full.svg" alt="Move It" />
      </figure>
      <div>
        <SwitchToggle />
      </div>
    </div>
  );
};

export default ControlBar;
