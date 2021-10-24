import {$R3, $R3b} from "../pages/homepage-style";
import Card from "../components/card";
import React from 'react'


function Article() {
  return (
       <div >
           <$R3>
               <Card src="/imgs/Rectangle 113.png" title={"volusion"}
                     explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>
               <Card src="/imgs/Rectangle 113.png" title={"volusion"}
                     explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>

           </$R3>
           <$R3b>
               <Card src="/imgs/Rectangle 113.png" title={"volusion"}
                     explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>
               <Card src="/imgs/Rectangle 113.png" title={"volusion"}
                     explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>


           </$R3b>
       </div >
  );
}

export default Article;

