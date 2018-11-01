import { Easing, Animated } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import SignUp from './SignUp';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [ { translateX } ] }
    },
  }
}

const LoginNavigator = StackNavigator({
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  }
},
{
  headerMode: 'none',
  mode: 'card',
  initialRouteName: 'Login',
  transitionConfig
});

export default LoginNavigator;
