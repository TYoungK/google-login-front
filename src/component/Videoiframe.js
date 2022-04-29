import React, { useState } from "react";
import styled from "styled-components";

const VideoIframe = ({videoUrl}) => {


    
    return(
    
            <Container>
                <iframe
                title="registerVideo"
                src={`https://youtube.com/embed/${videoUrl.split('/')[3]}`}
                width="584"
                height="329"
                frameBorder="0"
                ></iframe>
            </Container>
      
    )
}

export default VideoIframe; 


const Container = styled.div`
    border: 1px solid gainsboro;
    width: 584px;
    height: 329px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;



const UploadBox = styled.div`
    width: 100%;
    height:48px;
    margin-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;


    &>input {
        width:418px;
        height: 48px;
        background-color: #23242B;
        font-size: 16px;
        color: #48506C;
        border: none;
        text-indent: 16px;
    }
    
    &>div {
        width: 103px; 
        height:48px;
        background-color: #24D982;
        margin-left: 12px;
        color: #16171C;
        text-align: center;
        line-height: 48px;
        cursor: pointer;
    }
`;

