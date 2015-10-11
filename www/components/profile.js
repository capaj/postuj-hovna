import React from 'react'
import ProfileStore from '../stores/profile-store'
import FbProfilePicture from './fb-profile-picture'
import {observeStoreByString} from 'capaj/react-observe-store'
import {user} from '../services/moonridge'
import {FormattedDate} from 'react-intl'

var locales = ['cs', 'en']

export default class Profile extends React.Component {
  constructor (...props) {
    super(...props)
    var id = this.props.params.id
    if (id) {
      user.query().findOne({_id: id}).exec().promise.then((user) => {
          this.user = user
          this.forceUpdate()
      })
    } else {
      this.user = ProfileStore
      observeStoreByString(this, ProfileStore, 'this.user', this.renderContent)
    }
  }
  renderContent () {
    if (this.user && this.user._id) {
      if (this.user.fb) {
        var profilePic = <FbProfilePicture id={this.user.fb.id} type='normal' style={{marginRight: 20}}/>
      }
      return <div style={{margin: 20}}>
        <div className='profile-header' style={{display: 'flex', marginBottom: 15}}>
          {profilePic}
          <h3>{this.user.fb.name}</h3>
        </div>
        <span>Karma: {this.user.karma}</span>
        <br/>
        <span>
        Registrace <FormattedDate locales={locales} value={this.user.creation_date}/>
      </span>
        <br/>
        <a href={'https://www.facebook.com/' + this.user.fb.id}>Facebook</a>
      </div>

    } else {
      return <div>
        <h5>Nejste přihlášen</h5>
        <button className='btn' onClick={ProfileStore.login}>PŘIHLÁSIT</button>
      </div>
    }
  }
  render (){
    return <div style={{padding: 15}}>{this.renderContent()}</div>
  }
}
