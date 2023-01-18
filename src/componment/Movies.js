import React from 'react'

import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import Ved from './Ved';


function Movies({movies, text, rate}) {


  return (
   
 
    <>
     <Ved/>
  

      <div className="box">
    {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())&& el.rating>=rate).map((el)=>
      <Link to={`/trailer/${el.id}`}><Card className="cart" style={{ width: '18rem' , margin:"20px"}}>
      <Card.Img className="img" variant="top" src={el.posterurl}
        style={{
        minWidth:"286px",
        maxWidth:"286px",
        minHeight:"286px",
        maxHeight:"286px"}}/>
      <Card.Body>
        <Card.Title className="bleu1">{el.name}</Card.Title>
        <Card.Text className="bleu2">
          
        <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    value={el.rating}
    edit={false}


  />
 
        </Card.Text>

      </Card.Body>
    </Card>
    </Link>
 
     ).reverse()}
          
           </div> 
             </>
           );
}


        export default Movies;