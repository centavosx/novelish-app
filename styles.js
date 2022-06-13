import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleAndDetails: {
    width: '100%',
    paddingHorizontal: 20,
  },
  novelistContainer: {
    flexDirection: 'row',
  },
  notifiedText: {
    fontSize: 28,
    marginVertical: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    height: 240,
    width: 240,
  },
  notifiedContainer: {
    marginHorizontal: 10,
    borderRadius: 30,
  },
  notifiedButton: {
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
  },
  imgCharacterNovel: {
    height: 45,
    width: 34,
    margin: 0.5,
  },
  button: {
    borderRadius: 10,
    justifyContent: 'center',
    width: 192,
    height: 48.5,
    marginVertical: 12,
  },
  buttonTxt: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bgimage: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: 'violet',
    textDecorationStyle: 'solid',
    textShadowColor: 'black',
    textShadowOffset: {
      height: 2.5,
      width: 1.5,
    },
    textTransform: 'uppercase',
    textShadowRadius: 5,
    fontWeight: 'bold',
  },
})
