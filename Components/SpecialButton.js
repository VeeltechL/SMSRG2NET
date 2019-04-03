import React from 'react'
import {View, Button} from 'react-native'
import styles from '../Style/Styles'

class SpecialButton extends React.Component {

  render(){
    return(
      <View style = {styles.main_container}>
        <Button
          title = {this.props.message.nom}
          on_click = {() => this.props.navigation.navigate("Selection2",{key: this.props.message.key})}
        />
      </View>
    )
  }
}

export default SpecialButton
