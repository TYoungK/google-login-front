import React, { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import VideoIframe from "../component/Videoiframe";
import RegisterVideo from "../component/RegisterVideo";

const Register = ({videoShow, setVideoShow, user_id}) => {


    const [videoUrl, setVideoUrl] = useState("");
    const handleClickUpload = () => {
        // 업로드 버튼 클릭시 
        setVideoUrl(videoUrl); // videoUrl에 url값 넣어줌
        setVideoShow(true); // video iframe보이도록
        //console.log(videoUrl);
    }
    

    const handleClickPublish = () => {
        // axios , fetch 등을 사용해서 api통신 
        //console.log(videoUrl,user_id);

        axios.put('http://localhost:8000/user',{
            user_id : user_id,
            profile_uri : videoUrl,
        }).then(res=> {
            console.log(res);
        });
    }
   
  
    return (

       <Container>
            
                <InputBox>
                {videoShow ? <VideoIframe videoUrl={videoUrl}></VideoIframe>
                :
                <RegisterVideo
                    // videoShow={videoShow}
                    // setVideoShow={ setVideoShow}
                    videoUrl={videoUrl}
                    setVideoUrl={setVideoUrl}
                    handleClickUpload={handleClickUpload}
                ></RegisterVideo>
                }
                </InputBox>
                    <PublishBtnActive>
                        <div onClick={handleClickPublish}>
                            <img src="../../images/publish.png" alt=""></img>
                        </div>
                        <div>Publish</div>
                    </PublishBtnActive>

        
        </Container>
           
    );
}

export default Register;


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:white;
`;

const InputBox = styled.div`
    
`;



const PublishBtn = styled.div`
    width: 64px;
    height: 96px;
    &>div:nth-child(1) {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #48506C;
        cursor: pointer;
        &>img {
            width: 32px;
            height:32px;
        }
    }
    &>div:nth-child(2) {
        width: 100%; 
        height:24px;
        font-size: 16px;
        color:#90A0B7;
        margin-top: 8px;
        text-align: center;
    }
`; 

const PublishBtnActive = styled(PublishBtn)`
    
    &>div:nth-child(1) {
        background-color: #24D982;
        cursor: pointer;
    }
    &>div:nth-child(2) {
        width: 100%; 
        height:24px;
        font-size: 16px;
        color:#24D982;
        margin-top: 8px;
        text-align: center;
    }
`; 


