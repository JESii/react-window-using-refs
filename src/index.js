import React from "react";
import ReactDOM from "react-dom";
import { FixedSizeList as List } from "react-window";

import "./styles.css";

const Row = ({ index, style, outerRef, data }) => {
  //if (index % 2) {
  //  return <div style={{ display: 'none' }}></div>;
  //} else {
  console.log(outerRef);
  console.log(data);
  return (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      Row {index}
    </div>
  );
  // }
};

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
  }

  render() {
    const { display } = this.state;
    const outerRef = React.createRef();
    const innerRef = React.createRef();
    return (
      <List
        className="List"
        height={150}
        itemCount={1000}
        itemSize={35}
        width={300}
        style={display ? {} : { display: "none" }}
        outerRef={outerRef}
        innerRef={innerRef}
      >
        {Row}
      </List>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));
