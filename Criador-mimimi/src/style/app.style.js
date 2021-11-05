import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  body: {
    backgroundColor: '#999999',
    paddingTop: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    color: '#fff'
  },
  // quadrado1: {
  //   width: 50,
  //   height: 50,
  //   backgroundColor: 'blue'
  // },
  // quadrado2: {
  //   width: 50,
  //   height: 100,
  //   backgroundColor: 'purple'
  // },
  // quadrado3: {
  //   width: 50,
  //   height: 200,
  //   backgroundColor: 'green'
  // },
  inputArea: {
    alignSelf: 'stretch',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#eee',
    color: '#000',
    height: 40,
    margin: 10,
    padding: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  button: {
    height: 40,
    margin: 20,
    padding: 10,
    toUpperCase: false,
  },
  area: {
    width: 300,
    height: 300,
    marginTop: 10,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: -70,
    zIndex: 0,
  },
  texto: {
    fontSize: 25,
    color: '#FFF',
    padding: 10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 70
  },
  texto1: {
    zIndex: 1,
  },
  texto2: {
    zIndex: 1,
    marginTop: -70,
  }
});
