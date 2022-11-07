import {StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  statusWrapper : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 30,
    borderBottomColor : '#333333',
    borderBottomWidth : 1
  },
  textStatus : {
    color : '#4EA8DE',
    fontWeight: '700',
    fontSize: 14,
    marginRight: 5
  },
  viewStatus : {
    flexDirection : 'row',
  },
  textCounter : {
    color : '#fff',
    fontSize: 14,
    fontWeight: '700'
  }
});