import React from 'react';

export default class FbProfilePicture extends React.Component {
  constructor(...props) {
    super(...props);
  }

  render() {
    return <div style={{'max-width': '100%'}}>
      <img style={{borderRadius: "50%"}} src={`https://graph.facebook.com/${this.props.id}/picture?width=55&height=55`}/>
    </div>;
  }
}