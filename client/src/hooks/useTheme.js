import { theme } from 'antd';
import { useState } from 'react';

function useTheme() {
  const [themeConfig, setThemeConfig] = useState({
    algorithm: theme.defaultAlgorithm, // Default algorithm
    components: {},
    token: {},
  });

  // Function to change the algorithm dynamically
  const changeAlgorithm = (isDark) => {
    let algorithm = theme.defaultAlgorithm;

    if (isDark) {
      algorithm = theme.darkAlgorithm;
    } else {
      algorithm = theme.defaultAlgorithm;
    }
    setThemeConfig({
      ...themeConfig,
      algorithm,
    });
  };

  return { themeConfig, changeAlgorithm };
}

export default useTheme;
