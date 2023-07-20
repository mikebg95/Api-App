import React from 'react';
import ListItem from './ListItem';

const List = ({ items, reqType }) => {
  return (
    <ul className="List">
        {items.map(item => (
            <ListItem key={item.id} item={item} reqType={reqType} />
        ))}    
    </ul>
  )
}

export default List
