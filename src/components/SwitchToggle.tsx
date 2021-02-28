import React, { useState } from 'react';
import Switch from 'react-switch';
import { FiMoon, FiSun } from 'react-icons/fi';

import styles from '../styles/components/SwitchToggle.module.css';

const SwitchToggle: React.FC = () => {
  const [isToggled, setIsToggle] = useState(false);

  function changeTheme() {
    setIsToggle(!isToggled);

    document.body.classList.toggle('dark-mode');
  }

  return (
    <div className={styles.container}>
      <Switch
        className="themeMode"
        onChange={changeTheme}
        checked={isToggled}
        checkedIcon={false}
        uncheckedIcon={false}
        checkedHandleIcon={
          <div className={styles.moonIconContainer}>
            <FiMoon size={18} style={{ fill: 'var(--bgControlBar)' }} />
          </div>
        }
        uncheckedHandleIcon={
          <div className={styles.sunIconContainer}>
            <FiSun size={18} style={{ fill: 'var(--bgControlBar)' }} />
          </div>
        }
        height={18}
        width={60}
        handleDiameter={24}
        onHandleColor={'#ece6fa'}
        offHandleColor={'#ece6fa'}
        offColor={'#564f66'}
        onColor={'#564f66'}
      />
    </div>
  );
};

export default SwitchToggle;
