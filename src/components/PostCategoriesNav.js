import React from 'react'
import { NavLink } from 'react-router-dom'

import { slugify } from '../util/url'
import './PostCategoriesNav.css'

const PostCategoriesNav = ({ categories }) => (
  <div className='container'>
    <div className='PostCategoriesNav' id='PostCategoriesNav'>
      <NavLink className='NavLink' exact to={`/`}>
        All
      </NavLink>
      {categories.map((category, index) => (
        <NavLink
          className='NavLink'
          key={category.title + index}
          to={`/blog/category/${slugify(category.title)}/#PostCategoriesNav`}
        >
          {category.title}
        </NavLink>
      ))}
    </div>
  </div>
)

export default PostCategoriesNav
