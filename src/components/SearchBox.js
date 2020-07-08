import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='tc pa2'>
      <input
        className='bg-lightest-blue pa3 ba'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>

  )
}

export default SearchBox;