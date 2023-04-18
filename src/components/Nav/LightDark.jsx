import React, { useState, useEffect } from 'react';
import { Switch } from 'antd';

const LightDarkTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  const handleChange = (checked) => {
    setIsDark(checked);
    document.documentElement.setAttribute('data-theme', checked ? 'dark' : 'light');
  };

  return (
    <div>
      <Switch checked={isDark} onChange={handleChange} />
      <span style={{ marginLeft: 8 }}>{isDark ? 'Dark' : 'Light'} Theme</span>
    </div>
  );
};

export default LightDarkTheme;
