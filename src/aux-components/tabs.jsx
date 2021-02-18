import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({children, activeTab}) => {

  const tabs = React.Children.toArray(children);

  const activeTabContent = tabs.map((child, index) => {
    if (index === activeTab) {
      return child;
    } else {
      return null;
    }
  });

  return (
    <React.Fragment>
      {activeTabContent}
    </React.Fragment>
  );
};

Tabs.propTypes = {
  children: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default Tabs;
