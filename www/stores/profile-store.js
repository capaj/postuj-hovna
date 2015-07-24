const self = {
  login: function() {

  }
};

FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    // Logged in

  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not this app

  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.

  }
});


export default self;