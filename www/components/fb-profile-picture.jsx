import React from 'react';

export default class FbProfilePicture extends React.Component {
  constructor(...props) {
    super(...props);
  }

  render() {
    var style = Object.assign({maxWidth: '100%'}, this.props.style);

    return <div style={style}>
      <img style={{borderRadius: "50%"}} src={`https://graph.facebook.com/${this.props.id}/picture?width=55&height=55`}/>
    </div>;
  }
}