import React from 'react';
import {useHistory} from 'react-router-dom';

const UserAvatar = () => {

  const history = useHistory();

  const handleMylistOpener = () => {
    history.push({pathname: `/mylist`});
  };

  return (
    <div className="user-block">
      <div className="user-block__avatar" onClick={handleMylistOpener}>
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    </div>
  );
};

export default UserAvatar;
