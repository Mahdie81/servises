import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";


function NavBar( { header } ) {

     return (

               
               <$MenuItems >
                   <img className="m2" src="/imgs/Group 2392.png"/>

                   <$N>
                       <ul >
                           <li >
                               <Link to = '/' >Agancy</Link >
                           </li >
                           <li >
                               <Link to = '/pages/work' >work</Link >
                           </li >
                           <li >
                               <Link to = '/blog' >contact</Link >
                           </li >
                       </ul >
                   </$N>

                    <Title>
                        <h2>servises</h2>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi</h4>
                        <br/>

                        <img className="b1" src="/imgs/Group 2393.png"/>

                    </Title>
               </$MenuItems >
               

     );
}

export default NavBar;

export const $MenuItems = styled.div`
      width: 100%;
      display: grid;
      grid-template-rows:2rem 44rem;
      grid-template-columns:[sidebar-s] 8rem [sidebar-b sidebar-e] minmax(6rem, 1fr) [center] repeat(8, [col-s] minmax(min-content, 14rem) [col-e]) [certer-e] minmax(6rem, 1fr) [full-end];

  @media only screen and (max-width:75em){
    grid-template-rows:2rem 25rem;
    
  }
 
  .m2{
    grid-column:1/-1;
    grid-row:1/3;
    width: 100%;
    height:100%;
    z-index:1;


    
  }
     
`

const $N=styled.div`
  margin-left:7rem;
  direction: rtl;
  grid-column:9/11;
  grid-row:1/2;
  padding:1rem;
  z-index:44;

  ul {
    list-style: none;
    display         : flex;
    justify-content : space-between;

    li {

      a {
        color     : white;
        cursor    : pointer;
        font-size : 1rem;
        :hover {
          border-bottom :2px solid var(--bxsh-grey);
          color:var(--purper);
        }
      }

      

      @media only screen and (max-width:75em){
        font-size:1rem;
        margin-left:2rem;
    }

  

    }
  
 

`
export const Title=styled.div`
  margin-top:10rem;
  z-index:44;
  color: white;
  grid-column:2/6;
  grid-row:2/3;

  @media only screen and (max-width:75em){
    font-size:1rem;
    margin-left:2rem;
    grid-column:1/10;
    grid-row:2/3;
  }
  
    `