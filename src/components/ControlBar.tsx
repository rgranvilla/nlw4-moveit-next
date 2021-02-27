import React, { useState } from 'react';

import styles from '../styles/components/ControlBar.module.css';
import { SwitchButton } from './SwitchButton';

interface Props {
  toggleTheme(): void;
}

const ControlBar: React.FC<Props> = () => {
  const [isToggled, setIsToggled] = useState(false);

  function changeTheme() {
    setIsToggled(!isToggled);

    document.body.classList.toggle('dark-mode');
  }

  return (
    <div className={styles.container}>
      MoveIt
      <SwitchButton isToggled={isToggled} onToggle={changeTheme} />
    </div>
  );
};

export default ControlBar;
