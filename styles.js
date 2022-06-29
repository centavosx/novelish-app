import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
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
    paddingHorizontal: 18,
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
    height: 260,
    width: 260,
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
    textAlign: 'center',
    fontFamily: 'GenBasB',
  },
  bgimage: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
  txtInput: {
    backgroundColor: '#ABAFBA',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FC2862',
    marginLeft: 5,
  },
  cardGenres: {
    backgroundColor: 'white',
    paddingHorizontal: 14,
    borderRadius: 10,
    paddingVertical: 8,
    margin: 5,
  },
  textGenres: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FC5180',
  },
  loginButton: {
    backgroundColor: '#EC7A99',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    marginTop: 10,
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
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  authorIconText: {
    backgroundColor: '#FC5180',
    textAlign: 'center',
    top: -10,
    width: '100%',
    paddingBottom: 3,
    paddingTop: 1.5,
    paddingHorizontal: 3,
    bottom: 1,
    color: 'white',
    borderRadius: 3,
    fontSize: 10,
  },
  authorIcon: {
    margin: 5,
    marginVertical: 5,
    width: 54,
  },
  authorIconImage: {
    height: 54,
    width: 54,
    borderRadius: 100,
    borderColor: '#FC5180',
    borderWidth: 2,
  },
})
export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height
