import ENV from 'ENV';
import backend from '../services/moonridge';

function connectedCallback(response) {
  self.authResponse = response.authResponse;  //saving into the store
  backend.authorize(self.authResponse.accessToken).then(function(user) {
    Object.assign(self, user);
    console.log("self", self);
  });
  FB.api('/me', function(response) {
    Object.assign(self, response);
  });
}

const self = {
  login: function() {

  }
};

window.fbAsyncInit = function() {
  FB.init({
    appId      : ENV.fbApp,
    xfbml      : true,
    version    : 'v2.4'
  });

  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // Logged in
    connectedCallback(response);
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not this app

    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.

    }
  });
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/cz_CS/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



export default self;