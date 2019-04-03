import React from 'react'
import {View,Text,FlatList} from 'react-native'
import styles from '../Style/Styles'
import BaliseItem from '../Components/BaliseItem'
import {connect} from 'react-redux'

class Liste extends React.Component {

  constructor(props){
    super(props)
    this.navigateTo = this.navigateTo.bind(this)
  }

  _balise_from_key(key){
    for (let i=0;i<this.props.savedBalises.length;i++){
      if (this.props.savedBalises[i].key == key){
        return this.props.savedBalises[i]
      }
    }
  }

  navigateTo(key){
    this.props.navigation.navigate('Selection1',{balise: {key: '0',tph: '0', nom: 'balise0'}})
  }

  test(){
    this.props.savedBalises = [{key: '0',tph: '0', nom: 'balise0'}]
  }

  render() {
    this.test()
    console.log(this.props.savedBalises)
    return (
      <View style = {styles.menu}>
      <View style={styles.main_container}>
        <FlatList
          data={[{key: '0',tph: '0', nom: 'balise0'}]}
          renderItem={({item}) =>
            <BaliseItem
              balise = {item}
              navigateTo = {this.navigateTo}
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
    savedBalises: state.toggleBalise.savedBalises
  }
}

export default connect(mapStateToProps)(Liste)
