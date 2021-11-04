import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  quadrado1: {
    width: 50,
    height: 50,
    backgroundColor: 'blue'
  },
  quadrado2: {
    width: 50,
    height: 100,
    backgroundColor: 'purple'
  },
  quadrado3: {
    width: 50,
    height: 200,
    backgroundColor: 'green'
  }
});
