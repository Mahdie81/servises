import React from 'react';
import { ReactComponent as TelegramIcon } from "../../assets/telegram.svg";
import { ReactComponent as WhatsAppIcon } from "../../assets/whats-app.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram-.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
     return (
          <$FooterGrid >
               <$Logo >
                    <img src = "/imgs/TaakSolution.com.png" alt = "logo" />
               </$Logo >
               <$SocialMediaIcon >

                   <img src = "/imgs/Group 2395.png" alt = "logo" />

               </$SocialMediaIcon>
                <$content>
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                </$content>
              <$content2>
                  suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                  suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

              </$content2>
              <$content3>
                  suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

              </$content3>
                <$content4>
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                </$content4>
               <$CopyRight >تمامی حقوق این سایت متعلق به وب برگر بوده و
                    هر گونه کپی برداری بدون درج منبع آن پیگرد قانونی خواهد داشت
               </$CopyRight >

          </$FooterGrid >
     );
}

export default Footer;

export const $FooterGrid = styled.footer`
    background-image: url("/imgs/Group 2394.png");
     display               : grid;
     grid-template-rows    :repeat(4,6rem);
     grid-template-columns :repeat(4,24%);
     width                 : 100%;
  .bg{
    grid-column                :1/-1;
    grid-row                   :1/-1;
    
  }
`

export const $Logo = styled.div`
     grid-column                :1/3;
     padding                    :2.2rem;
     grid-row                   :1/2;
     justify-self               : start;

     img {
         height: 90%;
       grid-column     : 1/-1;
          }
`


export const $SocialMediaIcon = styled.div`
     direction: rtl;
     grid-column     : 4/6;
     grid-row        : 1/2;
     align-self      :center;
     display         : grid;
     grid-column-gap : 1rem;
     justify-content : space-evenly;
     justify-self: end;
     margin-right: 2rem;
  @media only screen and (max-width:75em){
    grid-column     : 4/6;
    grid-row        : 2/3;
  }

`
export const $content = styled.div`
     font-size:0.6rem;
     grid-column                :1/2;
     padding                    :1rem;
     grid-row                   :2/3;
     margin-left               :5rem;

     
`
 const $content2 = styled($content)`
     grid-column                :2/3;
   
`

const $content3 = styled($content)`
     grid-column                :3/4;
   
`

const $content4 = styled($content)`
     grid-column                :4/5;
   
`
export const $CopyRight = styled.div`
     margin-top:1rem;
     text-align: center;
     grid-column : 2/-1;
      align-self:end;
     grid-row    : 4/5;
     font-size   :0.7rem;

`