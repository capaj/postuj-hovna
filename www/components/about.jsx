import React from 'react';
const jumboStyle = {borderRadius: 10}
export default class About extends React.Component {
  constructor(...props) {
    super(...props);

  }

  render() {
    return <div><h3>O aplikaci</h3>
      <div className="jumbotron" style={jumboStyle}>
        <h4>NADESIGNOVAL</h4>
        <div className="image">
          <img src="https://d13pix9kaak6wt.cloudfront.net/avatar/users/v/o/j/vojtech.svec_1373468600_48.png" alt="Vojtěch Švec"/>
          <h2 className="image-overlayed-title" style={{textAlign: 'center'}}>Vojtěch Švec</h2>
        </div>
      </div>

      <div className="jumbotron" style={jumboStyle}>
        <h4>NAKODIL</h4>
        <div className="image">

          <img src="http://scontent-vie1-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/10012793_10203475444116764_1857362913_o.jpg" alt="" />

          <h2 className="image-overlayed-title" style={{textAlign: 'center'}}>Jiří Špác</h2>

        </div>
      </div>
    </div>
  }
}