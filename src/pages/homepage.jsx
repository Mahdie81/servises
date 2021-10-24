import React, { Component }  from "react";
import styled from "styled-components";
import {Box,$R1,$R3,$R3b,$R4} from "./homepage-style";
import Card from "../components/card";
function Home() {
    return (
        <div >

            <Box>
                <$R1>
                    <h2>Consulting</h2><br/>
                    <ul>
                        <li>
                            Business Business Consulting
                        </li>
                        <li>
                            Business Business Consulting
                        </li>
                        <li>
                            Business Business Consulting
                        </li>
                    </ul>
                    <br/><br/><br/>
                    <h2>Boutique graphic </h2><br/>
                    <ul>
                        <li>
                            Business Business ConsultingBusiness Business Consulting
                        </li>
                        <li>
                            Business Business ConsultingBusiness Business Consulting
                        </li>
                        <li>
                            Business Business ConsultingBusiness Business Consulting
                        </li>
                        <li>
                            Business Business ConsultingBusiness Business Consulting
                        </li>
                        <li>
                            Business Business ConsultingBusiness Business Consulting
                        </li>
                    </ul>
                    <br/><br/>
                    <h2>Boutique graphic </h2>
                    <br/>
                    <ul>
                        <li>
                            Business Business Consulting
                        </li>
                        <li>
                            Business Business Consulting
                        </li>
                        <li>
                            Business Business Consulting
                        </li>
                    </ul>
                </$R1>
                <br/><br/>
                <$R3>
                    <Card src="/imgs/Rectangle 113.png" title={"volusion"}
                          explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>
                    <Card src="/imgs/Rectangle.png" title={"volusion"}
                          explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>
                    <Card src="/imgs/Rectangle 113.png" title={"volusion"}
                          explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>
                    <Card src="/imgs/Rectangle.png" title={"volusion"}
                          explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>

                </$R3>
                <$R3b>
                    <Card src="/imgs/Rectangle.png" title={"volusion"}
                          explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>
                    <Card src="/imgs/Rectangle.png" title={"volusion"}
                          explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>
                    <Card src="/imgs/Rectangle 113.png" title={"volusion"}
                          explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>
                    <Card src="/imgs/Rectangle.png" title={"volusion"}
                          explanation={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"}/>


                </$R3b>
                <$R4>
                    <h1>We will accompany you to success</h1>
                    <img className="buttom" src = "/imgs/Group 2396.png" alt = "buttom" />
                    <img className="bg" src = "/imgs/Group 2349.png" alt = "logo" />
                </$R4>


            </Box>

        </div >
    );
}

export default Home;

