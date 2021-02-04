import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main';

const App = (props) => {
  return (
    <React.Fragment>
      <Main {...props}/>
    </React.Fragment>
  );
};

App.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired
};

export default App;
