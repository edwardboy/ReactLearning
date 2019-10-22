import React, { Component } from "react";
import PropTypes from 'prop-types'

class ServiceItem extends Component {
  render() {
    const { index, content, onclick } = this.props;
    return (
      <li onClick={() => onclick(index)} key={index}>
        {content}
      </li>
    );
  }
}

ServiceItem.propTypes={
    index:PropTypes.number,
    content:PropTypes.string,
    onclick:PropTypes.func,
}

export default ServiceItem;
