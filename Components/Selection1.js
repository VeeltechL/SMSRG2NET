import React from 'react'
import styles from '../Style/Styles'
import {View,TextInput,Button,Text,FlatList} from 'react-native'
import {connect} from 'react-redux'
import messages from '../Ressources/messages'
import SpecialButton from '../Components/SpecialButton'

class Selection1 extends React.Component {

  render(){
    console.log(this.props.navigation.state.params)
    return(
      <View style = {styles.main_container}>
        <Text style = {styles.nom}>{this.props.navigation.state.params.balise.nom}</Text>
        <View style = {styles.photo_text}>
          <FlatList
            data = {messages}
            renderItem = {({item})=>
              <SpecialButton
                message = {item}
                navigation = {this.props.navigation}
              />
            }
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    savedBalises: state.toggleBalise.savedBalises,
  }
}

export default connect(mapStateToProps)(Selection1)
