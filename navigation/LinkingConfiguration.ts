import * as Linking from 'expo-linking';

import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'Home',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'Random',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
