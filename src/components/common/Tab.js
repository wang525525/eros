import React from "react";
import PropTypes from "prop-types";

export default function Tab({ children }) {
  return <div>{children}</div>;
}

Tab.propTypes = {
  value: PropTypes.string,
  active: PropTypes.bool,
  header: PropTypes.node.isRequired,
  children: PropTypes.node
};