import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';

import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/Home';
import LinkingConfiguration from './LinkingConfiguration';
import NotFoundScreen from '../screens/NotFoundScreen';
import RandomScreen from '../screens/Random';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Navigation() {
    return (
        <NavigationContainer
          linking={LinkingConfiguration}>
          <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    );
  }

  const BottomTab = createBottomTabNavigator<RootTabParamList>();

  function BottomTabNavigator() {
  
  
    return (
      <BottomTab.Navigator
        initialRouteName="TabOne">
        <BottomTab.Screen
          name="TabOne"
          component={HomeScreen}
          options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
            title: 'Home',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          })}
        />
        <BottomTab.Screen
          name="TabTwo"
          component={RandomScreen}
          options={{
            title: 'Random',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
      </BottomTab.Navigator>
    );
  }
  
  
  function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
  }) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
  }
