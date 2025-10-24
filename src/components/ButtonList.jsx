import React from 'react';
import FilterButton from './FilterButton';

const ButtonList = () => {
  const list = [
    'All',
    'Gaming',
    'Songs',
    'Live',
    'Cricket',
    'Cooking',
    'New Songs',
    'News',
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {list.map((item, index) => (
        <FilterButton name={item} key={index} className="cursor-pointer" />
      ))}
    </div>
  );
};

export default ButtonList;
