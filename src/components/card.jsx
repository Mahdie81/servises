import React from 'react'
import styled from "styled-components";

function Card(props) {
    return (
        <$card>
            <img className="m" src={props.src} alt="عکس خبر"/>
           <div>

               <h5><h3>{props.title}</h3>{props.explanation}</h5>
           </div>

        </$card>
    );
}

export default Card;

const $card=styled.div`
  margin:auto;
  height:22rem;
  border-radius:var(--bdrs-input);
  justify-content: center;
  background-color:var(--dark-white);
  margin-bottom:5rem;

  :hover {
    background-color   :var(--purper);
    -webkit-mask-size  : cover;


  }
  
    h5{
      margin:1rem;
      h3{
        font-size:1.5rem;
        color:var(--BLUE);
      }
    }
  


 
  img{
    margin: 0px;
    width:100%;
    height:60%;
    border-radius:var(--bdrs-input) var(--bdrs-input) 0px  0px;

  }
  
`