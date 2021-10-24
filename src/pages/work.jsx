import React, { Component }  from "react";
import styled from "styled-components";
import Card from "../components/card";
import {$R3, $R3b} from "./homepage-style";
function Work() {
  return (
       <Box>
           <h3>designed sites<br/>
               designed sites<br/>
               designed sites
           </h3>


           <$R3>
               <Card src="/imgs/Rectangle.png" title={"volusion"}
                     explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>
               <Card src="/imgs/Rectangle 113.png" title={"volusion"}
                     explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>
               <Card src="/imgs/Rectangle.png" title={"volusion"}
                     explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>
               <Card src="/imgs/Rectangle 113.png" title={"volusion"}
                     explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>

           </$R3>
           <$R3b>
               <Card src="/imgs/Rectangle 113.png" title={"volusion"}
                     explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>
               <Card src="/imgs/Rectangle.png" title={"volusion"}
                     explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>
               <Card src="/imgs/Rectangle 113.png" title={"volusion"}
                     explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>
               <Card src="/imgs/Rectangle.png" title={"volusion"}
                     explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>


           </$R3b>
           <$Row4>
               <img src="/imgs/Group 2348.png" alt="Other brands"/>
           </$Row4>

       </Box>


  );
}

export default Work;

export const Box = styled.div`
  display              : grid;
  grid-template-rows   :1rem 10rem 110rem 60rem;
  grid-template-columns:[sidebar-s] 8rem [sidebar-b sidebar-e] minmax(6rem, 1fr) [center] repeat(8, [col-s] minmax(min-content, 14rem) [col-e]) [certer-e] minmax(6rem, 1fr) [full-end];
  position             : relative;
  grid-row-gap         :5rem;
  grid-column-gap      :1rem;
  h3{
    text-decoration:underline;
    text-align:left;
    grid-row:2/3;
    grid-column:2/9;
    line-height:40px;
  }
  @media only screen and (max-width:75em){
    background-color:#f1f2f6;
  }
  
`
const $Row4=styled.div`
  grid-row:4/5;
  grid-column:2/10;
  @media only screen and (max-width:75em){
    height:60%;

  }
`