import React from 'react';

export default class About extends React.Component {
  constructor(...props) {
    super(...props);

  }

  render() {
    return <div><h3>O aplikaci</h3>
      <div className="jumbotron">
        <h4>NADESIGNOVAL</h4>
      </div>

      <div className="jumbotron">
        <h4>NAKODIL</h4>
      </div>
    </div>;
  }
}