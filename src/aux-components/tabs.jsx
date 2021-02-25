import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({children, activeTab}) => {
  const childrenTabs = React.Children.toArray(children);
  return childrenTabs[activeTab] || null;
};

Tabs.propTypes = {
  children: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default Tabs;
