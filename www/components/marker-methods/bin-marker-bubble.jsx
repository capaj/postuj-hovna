import React from 'react';

export default class BinMarkerBubbleBody extends React.Component {
  render() {
    return <div>
      <h3>aktualizovat počet pytlíků</h3>
      <button onClick={this.seEnough}>DOST</button>
      <button onClick={this.setLittle}>MÁLO</button>
    </div>;
  }
};