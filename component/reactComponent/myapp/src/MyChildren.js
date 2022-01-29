import React from 'react';

const Mobile = (props) => {
    return (
      <React.Fragment>
        <h1>
          ********************** MyChildren.js | id: root4 **********************
        </h1>
        <h2>Mobile Name: {props.children}</h2>
      </React.Fragment>
    );
}
 
export default Mobile;