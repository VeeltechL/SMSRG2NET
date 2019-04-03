import React from 'react'
import {TouchableOpacity,StyleSheet,View,Text} from 'react-native'
import {connect} from 'react-redux'

class BaliseItem extends React.Component {

  choose_balise(){
    this.props.navigateTo(this.props.balise.key)
  }

  render() {
    return (
      <TouchableOpacity style = {styles.main_container}
        onPress = {() => this.choose_balise()}>
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{this.props.balise.nom}</Text>
          </View>
          <View style={styles.bottom_container}>
            <Text style={styles.date}>{this.props.balise.tph}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    borderBottomWidth: 1,
    borderColor: '#909090'
  },
  image: {
    width: 90,
    height: 90,
    margin: 4,
    alignSelf: 'center',
  },
  content_container: {
    flex: 1,
    margin: 5,
    right: 0
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  bottom_container: {
    flex:2,
    flexDirection: 'row',
    right: 0
  },
  del_container: {
    width: 100,
    flex: 1,
    alignSelf: 'flex-end'
  },
  date:{
    fontSize: 15,
    fontStyle: 'italic',
    marginRight: 50,
    flex: 1
  },
  mail_bouton: {
    width: 50,
    height: 30
  },
  mail_logo: {
    width: 50,
    height: 30
  }
})

const mapStateToProps = (state) => {
  return {
    savedBalises: state.toggleBalise.savedBalises
  }
}

export default connect(mapStateToProps)(BaliseItem)
