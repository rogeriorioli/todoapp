import { Button, StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 20,
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    position :  'relative',
    top: -23
  },
  input : {
    height: 54,
    borderRadius: 6,
    borderColor: '#0D0D0D',
    borderWidth: 1,
    backgroundColor: '#262626',
    width: '100%',
    color: '#808080',
    paddingHorizontal: 10,
  },

  button : {
    width : 54,
    height: 54,
    borderRadius: 6,
    marginLeft :8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E6F9F'
  },
  buttonText: {
    color : '#fff',
    borderRadius: 100,
    fontSize: 25,

    
  }

});