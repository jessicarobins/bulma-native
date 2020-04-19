import { getStorybookUI, configure } from '@storybook/react-native';

import './addons';
import './rn-addons';

// import stories
configure(() => {
  require('../src/elements/Button/Button.story');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({ asyncStorage: null });

export default StorybookUIRoot;
