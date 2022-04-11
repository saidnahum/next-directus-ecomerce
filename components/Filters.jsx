import React from 'react'
import Checkbox from './Checkbox'

const Filters = ({ categories, getSelectedCategories }) => {
   return (
      <div className='flex items-center mt-5'>
         { categories.map(category => <Checkbox key={category.id} label={category.name} id={category.id} getSelectedCategories={getSelectedCategories}/>) }
      </div>
   )
}

export default Filters