import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create ({
  menu:{
    flex: 1
  },
  main_container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e0e0e0'
  },
  bande_sup:{
    backgroundColor: '#202020',
  },
  nom:{
    flex: 1,
    borderWidth: 1,
    borderColor: '#a0a0a0',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 2
  },
  photo_commentaires: {
    flex: 10,
    flexDirection: 'column',
  },
  photo_text: {
    flex: 3,
    margin: 5
  },
  text: {
    color: '#b0b0b0',
    fontSize: 10
  },
  photo_frame:{
    backgroundColor: '#b0b0b0',
    height: 200,
    width: 150,
    borderWidth: 2,
    borderColor: '#606060'
  },
  photo: {
    width: null,
    resizeMode: 'contain',
    height: 150
  },
  touchableOpacity: {
    height: 150,
    width: 150
  },
  commentaires: {
    flex: 2,
    height: 400,
    borderWidth: 1,
    borderColor: '#505050',
    margin: 5,
    textAlignVertical: 'top'
  },
  save: {
    flex: 2
  },
  new: {
    flex: 2
  },
  delete_photo: {
    flex: 1,
    width: 100
  },
  photo_container: {
    flex: 1,
    flexDirection: 'column',
    width: 150,
    margin: 10
  }
})

export default styles
