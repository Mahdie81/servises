import styled from "styled-components";
import React, { Component }  from "react";

export const Box = styled.div`
  display              : grid;
  grid-template-rows   :1rem 45rem 110rem 40rem;
  grid-template-columns:[sidebar-s] 8rem [sidebar-b sidebar-e] minmax(6rem, 1fr) [center] repeat(8, [col-s] minmax(min-content, 14rem) [col-e]) [certer-e] minmax(6rem, 1fr) [full-end];
  position             : relative;
  grid-row-gap         :5rem;
  grid-column-gap      :1rem;
  @media only screen and (max-width:75em){
    grid-row-gap         :9rem;
    grid-template-columns:30rem;

  }
  
`


export const $R1=styled.div`
  text-align:left;
  grid-row:2/3;
  grid-column:2/9;
  margin-left:5rem;
  h2{
    color:var(--bxsh-grey);
  }
  ul{
    margin-left:3rem;
    li{
      margin-bottom:1rem;
    }
  }

  @media only screen and (max-width:75em){
    font-size:1rem;
    margin-left:2rem;
    grid-column:1/-1;
    grid-row:2/3;
  }
    `

export const $R3=styled.div`
  margin-left:10%;
  grid-column:2/6;
  grid-row:3/4;
  justify-items:center;
  @media only screen and (max-width:75em){
    margin-left:5rem;
    grid-column:1/-1;
    grid-row:3/4;
  }
    
    `
export const $R3b=styled($R3)`
  margin-top:8rem;
  grid-column:7/10;
  @media only screen and (max-width:75em){
    display: none;
  }
  
`
export const $R4=styled.div`
  grid-column:1/12;
  grid-row:4/5;
  text-align:center;
  display:grid;
  grid-template-columns:35% 30% 35%;
  grid-template-rows:repeat(3,30%);
  @media only screen and (max-width:75em){
    grid-template-columns:35% 30% 35%;
    grid-template-rows:repeat(3,15%);

  }
  
  
  .buttom{
    z-index:9;
    grid-column:2/3;
    grid-row:2/3;
    margin:auto;
    @media only screen and (max-width:75em){
      width:50%;
      margin-top:2rem;
    }
  }
  .bg{
    width:100%;
    grid-column:1/-1;
    grid-row:1/4;
  }
  h1{
    color: white;
    grid-column:1/4;
    grid-row:2/3;
    z-index: 4;
    @media only screen and (max-width:75em){
      font-size: 1rem;
    }
  }

`