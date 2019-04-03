import React from 'react'
import styles from '../Style/Styles'
import Photo from '../Components/Photo'
import {View,TextInput,Image,Button,Text,FlatList} from 'react-native'
import {connect} from 'react-redux'
import defaultCommentaire from '../Ressources/defaultCommentaires'

class Formulaire extends React.Component {

  constructor(props) {
    super(props)
    this._del_photo = this._del_photo.bind(this)
    this.rafraichirPhotos = this.rafraichirPhotos.bind(this)
    this.editPhoto = this.editPhoto.bind(this)
    let params = this.props.navigation.state.params
    if (params.mode === 'NEW') {
      date = this._get_time_local()
      this.state = {
        produit: {
          nom:"",
          date: date,
          commentaires: defaultCommentaire,
          photos: [{photo: {uri: 'http://puu.sh/CWUtq/651fc03c3c.png',low_qual_uri: 'http://puu.sh/CWZRm/457b8f8369.png'},key: "1"}],
          key: this.props.navigation.state.params.key
        },
        refresh: false,
        editing: true
      }
      if (!this.props.settings.comm_defvalue){
        this.state.produit = {...this.state.produit,commentaires:''}
      } else if (this.props.settings.date_defvalue){
        comm = this.state.produit.commentaires
        this.state.produit.commentaires =  [comm.slice(0,6),' ',date,comm.slice(6)].join('');
      }
    } else if (params.mode === 'EDIT') {
      this.state = {
        produit: {
          nom: params.produit.nom,
          date: params.produit.date,
          commentaires: params.produit.commentaires,
          photos: params.produit.photos,
          key: params.produit.key
        },
        refresh: false,
      }
      if (params.produit.commentaires === "Pas de commentaires"){
        this.state.produit.commentaires = ""
      }
    }
  }

  _get_time_local(){
    date = new Date()
    day = String(date.getDate())
    if (day.length === 1){
      day = '0'+day
    }
    year = String(date.getFullYear())
    month = String(date.getMonth() + 1)
    if (month.length === 1){
      month = '0'+month
    }
    return day + '/' + month + '/' + year
  }

  _write_on_nom(char){
    this.setState({produit: {...this.state.produit,nom: char}})
  }

  _write_on_commentaires(char){
    this.setState({produit: {...this.state.produit,commentaires: char}})
  }

  _photo_id_from_key(key){
    for (i=0;i<this.state.produit.photos.length;i++){
      if (key === this.state.produit.photos[i].key){
        return i
      }
    }
  }

  _del_photo(key){
    id = this._photo_id_from_key(key)
    newPhotos = this.state.produit.photos
    if (!(id === 0 && this.state.produit.photos.length === 1)){
      if (!(id === this.state.produit.photos.length - 1)){
        newPhotos.splice(id,1)
        this.setState({produit: {...this.state.produit,photos: newPhotos}})
        this.rafraichirPhotos()
      }
    }
  }

  _mise_en_forme_txt(produit){
    newProduit = {...produit}
    if (produit.commentaires === ""){
      newProduit.commentaires = "Pas de commentaires"
    }
    if (produit.nom === ""){
      newProduit.nom =  "Nouveau produit "+this.state.produit.key
    }
    return newProduit
  }

  _saveForm(mode){
    produit = this._mise_en_forme_txt(this.state.produit)
    if (mode === 'NEW'){
      type = "SAVE_PRODUIT_NEW"
      const action = {type: type, value: produit}
      this.props.dispatch(action)
    }
    else if (mode === 'EDIT'){
      type = "SAVE_PRODUIT_EDIT"
      const action = { type: type, value: produit, id: this.props.navigation.state.params.id}
      this.props.dispatch(action)
      this.props.navigation.state.params.rafraichir()
    }
    this.props.navigation.navigate("Liste")
  }

  editPhoto(key,photo){
    id = this._photo_id_from_key(key)
    newPhotos = {...this.state.produit}.photos
    if (id === this.state.produit.photos.length - 1) {
      newPhotos[id].photo = photo
      newPhotos.push({photo: {uri: 'http://puu.sh/CWUtq/651fc03c3c.png',low_qual_uri: 'http://puu.sh/CWZRm/457b8f8369.png'},key: String(Number(key)+1)})
    } else {
      newPhotos[id].photo = photo
    }
    this.setState({produit: {...this.state.produit,photos: newPhotos}})
    this.rafraichirPhotos()

  }

    rafraichirPhotos(){
    this.setState({refresh: !this.state.refresh})
  }

  render(){
    return(
      <View style = {styles.main_container}>
        <TextInput style = {styles.nom} placeholder = 'nom'
          onChangeText={(text)=>this._write_on_nom(text)}
          value = {this.state.produit.nom}
        />
        <View style = {styles.photo_commentaires}>
          <TextInput style = {styles.commentaires} placeholder = "commentaires"
            onChangeText={(text)=>this._write_on_commentaires(text)}
            multiline = {true}
            value = {this.state.produit.commentaires}
          />
          <View style = {styles.photo_text}>
            <FlatList
              horizontal = {true}
              data = {this.state.produit.photos}
              extraData = {this.state}
              renderItem = {({item})=>
                <Photo
                style = {styles.photo_frame}
                photo = {item.photo}
                photo_key = {item.key}
                del_photo = {this._del_photo}
                editPhoto = {this.editPhoto}
                rafraichirPhotos = {this.rafraichirPhotos}
                />
              }
            />
          </View>
        </View>
        <Button style = {styles.save} title='Enregistrer' onPress={() => this._saveForm(this.props.navigation.state.params.mode)}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    savedProduits: state.toggleProduit.savedProduits,
    settings: state.toggleSettings.settings
  }
}

export default connect(mapStateToProps)(Formulaire)
