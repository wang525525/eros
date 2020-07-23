import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import _ from "underscore";

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    const { children } = this.props;
    const tabs = Children.toArray(children);
    tabs.map((tab, i) => {
      if (tab.props.active === true) {
        this.setState({ value: tab.props.value });
      }
    });
  }

  isSelected(tab) {
    return tab.props.value === this.state.value;
  }

  selectTab(e, value) {
    this.setState({ value });
    this.props.onChange(e, value);
  }

  getHeader(tabs) {
    return tabs.map((tab, i) => {
      const style = this.isSelected(tab)
        ? activeTabHeaderStyle
        : tabHeaderStyle;

      

      return (
        <span
          key={tab.props.value}
          onClick={e => this.selectTab(e, tab.props.value)}
          style={i === 0 ? style : Object.assign({}, style)}
        >
          {tab.props.header}
        </span>
      );
    });
  }

  render() {
    const { children } = this.props;
    const tabs = Children.toArray(children);

    return (
      <div>
        <div style={tabsHeaderStyle}>{this.getHeader(tabs)}</div>
        <div style={tabsContentStyle}>
          {_.find(tabs, tab => this.isSelected(tab))}
        </div>
      </div>
    );
  }
}

Tabs.defaultProps = {
  onChange: _.noop
};

Tabs.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func
};

// Style
const tabsHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  borderRadius: "8px 8px 0 0",
  overflow: "hidden"
};

const tabHeaderStyle = {
  flex: "1",
  padding: "10px",
  textAlign: "center",
  cursor: "pointer",
};

const activeTabHeaderStyle = Object.assign({}, tabHeaderStyle, {
  borderBottom: "2px solid #FE2D66" ,
  cursor: "auto",
  color: "#FE2D66"
});

const tabsContentStyle = {
  padding: "10px",
  borderTop: "none",
};
