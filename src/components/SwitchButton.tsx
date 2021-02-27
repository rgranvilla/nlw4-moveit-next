import styles from '../styles/components/SwitchButton.module.css';

import { FiMoon, FiSun } from 'react-icons/fi';

interface SwitchButtonProps {
  isToggled: boolean;
  onToggle: () => void;
}

export function SwitchButton({ isToggled, onToggle }: SwitchButtonProps) {
  return (
    <>
      <div className={styles.container}>
        <label className={styles.switch}>
          <input type="checkbox" checked={isToggled} onChange={onToggle} />
          <span className={styles.slider} />
        </label>
      </div>
    </>
  );
}
