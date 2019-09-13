import React from 'react'
import { NavLink } from 'react-router-dom'
import { slugify } from '../util/url'
import './PostCategoriesNav.css'

const PostCategoriesNav = ({ categories }) => (
  <div className='container'>
    <div className='PostCategoriesNav' id='PostCategoriesNav'>
      <NavLink className='NavLink' exact to={`/`}
        onClick={() => setTimeout(function(){ document.getElementById('PostCategoriesNav').scrollIntoView() }, 0)}>
        All
      </NavLink>
      {categories.map((category, index) => (
        <NavLink
          className='NavLink'
          key={category.title + index}
          to={`/blog/category/${slugify(category.title)}/`}
          onClick={() => setTimeout(function(){ document.getElementById('PostCategoriesNav').scrollIntoView() }, 0)}
        >
          {category.title}
        </NavLink>
      ))}
    </div>
  </div>
)

export default PostCategoriesNav
