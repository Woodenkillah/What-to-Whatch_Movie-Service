import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = (props) => {
  return (
    <React.Fragment>
      <Main {...props}/>
    </React.Fragment>
  );
};

App.propTypes = {
  moviePromo: PropTypes.object.isRequired,
  movieItemsData: PropTypes.array.isRequired
};

export default App;
