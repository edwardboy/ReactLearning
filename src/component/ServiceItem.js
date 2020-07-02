import React, { Component } from "react";
import PropTypes from "prop-types";

class ServiceItem extends Component {
  state = {
    y: 0
  };

  render() {
    const { index, content, onclick } = this.props;
    return (
      <li onClick={() => onclick(index)} key={index}>
        {content}
      </li>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.content !== this.props.content;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.y !== prevState.y) {
      return {
        y: nextProps.y
      };
    }
    return null;
  }
}

ServiceItem.propTypes = {
  index: PropTypes.number,
  content: PropTypes.string,
  onclick: PropTypes.func
};

ServiceItem.defaultProps = {
    content: '默认'
}

export default ServiceItem;
