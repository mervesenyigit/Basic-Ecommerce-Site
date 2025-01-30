import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  return (
    <div className="card-content">
      
     
      <p>{category.description}</p>
      <Link to={`/category/${category.id}`}>
      <img src={category.image} alt={category.name} style={{ width: "100px", height: "100px" }} /> </Link>
      <h2> {category.name}</h2>
    </div>
 
  );
};

export default Category;
