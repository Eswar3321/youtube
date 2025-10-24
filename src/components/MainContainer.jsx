import React from 'react';
import ButtonList from './ButtonList';
import Videocontainer from './Videocontainer';

const MainContainer = () => {
  return (
    <div className="p-4">
      <ButtonList />
      <Videocontainer />
    </div>
  );
};

export default MainContainer;
