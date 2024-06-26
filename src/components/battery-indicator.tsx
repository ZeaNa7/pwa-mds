import React, { useState, useEffect } from 'react';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';

const BatteryIndicator: React.FC = () => {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

  useEffect(() => {
    if (('getBattery' in navigator) as any) {
      (navigator as any).getBattery().then((battery: any) => {
        const updateBatteryLevel = () => {
          setBatteryLevel(Math.floor(battery.level * 100));
        };

        updateBatteryLevel();
        battery.addEventListener('levelchange', updateBatteryLevel);
      });
    }
  }, []);

  return <div className="flex items-center">{batteryLevel !== null ? <span className="mr-2"><BatteryFullIcon /> {batteryLevel}%</span> : <span>Unavailable</span>}</div>;
};

export default BatteryIndicator;
