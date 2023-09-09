import React, { useState } from 'react'
// import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = ({ filter, setFilter }) => {

  return (
    <span>
      Search:{' '}
      <input
        placeholder='Search'
        value={filter || ''}
        onChange={e => {
          setFilter(e.target.value);
        }}
      />
    </span>
  )
}
