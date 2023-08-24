import { keyframes } from "@emotion/react";

// 애니메이션은 이곳에..
// 변수명 작성은 (동작명 + Animation) 으로 합시다.

export const bounceAnimation = keyframes`
    0% {
        top:0px;
    }
    95% {
        width: 100px;
    }
    to {
        top:300px; 
        width:115px;
        height:90px
    } 

`;
