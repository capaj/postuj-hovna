import React from 'react';

export default {
  bodyRender: function() {
    return <div>
      <h3>aktualizovat počet pytlíků</h3>
      <button onClick={this.seEnough}>DOST</button>
      <button onClick={this.setLittle}>MÁLO</button>
    </div>;
  }
};