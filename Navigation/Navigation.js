import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Liste from '../Components/Liste'
import ListeEdit from '../Components/ListeEdit'
import BaliseEdit from '../Components/BaliseEdit'
import Settings from '../Components/Settings'
import Selection1 from '../Components/Selection1'
import Selection2 from '../Components/Selection2'
import Envoi from '../Components/Envoi'
import {StyleSheet,Image} from 'react-native'
import React from 'react'

const MessageStackNavigator = createStackNavigator({
  Liste: {
    screen: Liste,
    navigationOptions: {
      title: 'Menu'
    }
  },
  Selection1: {
    screen: Selection1,
    navigationOptions: {
      title: 'Selection du type de message'
    }
  },
  Selection2: {
    screen: Selection2,
    navigationOptions: {
      title: 'Selection du message'
    }
  },
  Envoi: {
    screen: Envoi,
    navigationOptions: {
      title: 'Envoi'
    }
  }
})

const SettingsStackNavigator = createStackNavigator({
  ListeEdit: {
    screen: ListeEdit,
    navigationOptions: {
      title: 'Liste des balises'
    }
  },
  BaliseEdit: {
    screen: BaliseEdit,
    navigationOptions: {
      title: 'Gerer la balise'
    }
  }
})

const BottomTabNavigator = createBottomTabNavigator({
  Menu: {
    screen: MessageStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../Style/search_logo.png')}
          style={styles.icon}/>
      }
    }
  },
  Settings: {
    screen: SettingsStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../Style/config_logo.png')}
          style={styles.icon}/>
      }
    }
  }
},
{
  tabBarOptions: {
    activeBackgroundColor: '#a0a0a0',
    inactiveBackgroundColor: '#d0d0d0',
    showLabel: false,
    showIcon: true
  }
}
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(BottomTabNavigator)
