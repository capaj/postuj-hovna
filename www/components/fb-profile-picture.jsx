import React from 'react';

export default class FbProfilePicture extends React.Component {
  constructor(...props) {
    super(...props);
  }

  render() {
    let style = Object.assign({maxWidth: '100%', display: 'inline-block'}, this.props.style);
    let size = 55;
    if (this.props.type === 'small') {
      size = 25;
    }

    return <div style={style}>
      <img style={{marginLeft: 6, marginRight: 2, borderRadius: "50%"}}
           src={`https://graph.facebook.com/${this.props.id}/picture?width=${size}&height=${size}`}/>
    </div>;
  }
}