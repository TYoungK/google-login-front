import axios from "axios";
import React, { useState, useRef } from "react";
import styled from 'styled-components';

const RegisterVideo = ({ videoUrl, setVideoUrl, handleClickUpload}) => {

    const handleChangeVideoUrl = (e) => {
        //input 값 가져오기

        setVideoUrl(e.target.value);
        //console.log(videoUrl, "url주소");
    }


    return(
       
        <Container>
            <TitleBox>
                <LTitle>Upload Video Link</LTitle>
                <STitle>Copy the link to your YouTube video and paste it.</STitle>
            </TitleBox>
            <UploadBox>
                <input placeholder="YouTube URL"
                    type="text"
                    value={videoUrl}
                    onChange={handleChangeVideoUrl}
                    onKeyUp={handleChangeVideoUrl}
                ></input>
                <div onClick={handleClickUpload}>Upload</div>
            </UploadBox>
        </Container>
      
    )
}

export default RegisterVideo; 


const Container = styled.div`
    width: 584px;
    height: 329px;
    background-color: #2F313E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TitleBox = styled.div`
    width: 348px;
    height: 72px;
`;

const LTitle = styled.div`
    width:100%;
    height: 28px;
    font-size: 28px;
    color: #fff;
    text-align: center;
`;
const STitle = styled.div`
    width:100%;
    height: 28px;
    font-size: 15px;
    color:#90A0B7;
    text-align: center;
    margin-top: 16px;
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


