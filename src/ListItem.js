import React from 'react'

const ListItem = ({ key, item }) => {
  return (
    <li>
        {JSON.stringify(item)}
    </li>
  )
}

export default ListItem
