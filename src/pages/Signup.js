import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const SignUp = () => {

    const handleClickGoogle = () => {
        window.location.href = "http://localhost:8000/user/auth/google";
    }
    
    const navigate = useNavigate();
    return (

       <Container>
           <ContentBox>
                <PlaneBox>
                    <img src="../../images/plane.png" alt=""></img>
                </PlaneBox>
                    <ProfileBox>
                        <img src="../../images/profile.png" alt="" ></img>
                        <STextBox>Invitation from Virus</STextBox>
                    </ProfileBox>
                    <LTextBox>
                        Welcome!<br></br>You are invited to the Moverse
                    </LTextBox>
                    <InfoTextBox>Upload your moves, choreographies, and dance in the Moverse.</InfoTextBox>
                    <BtnBox>
                        <Btn onClick={handleClickGoogle}>
                            <img alt="" src="../../images/google.png" />
                            <img alt="" src="../../images/Sign Up.png" style={{marginLeft:"21px"}}/>
                        </Btn>
                        <Btn onClick={()=> navigate('/register')}>
                            프로필 설정 할 유튜브 링크 저장
                        </Btn>
                    </BtnBox>
           </ContentBox>
       </Container>
           
    );
}

export default SignUp;



const Container = styled.div`
    width:100%;
    height: 100vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
   
`;

const ContentBox = styled.div`
    width: 574px;
`;

const PlaneBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 160px;  //?
    &img {
        width: 171.7px;
        height: 102.9px;
        object-fit: contain;
    }
`;
const ProfileBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 42px;
    &img {
        width: 56px;
        height: 56px;
        //object-fit: contain;
    }

`;
const STextBox = styled.div`
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #24D982;
    font-size: 14px;
    margin-top: 8px;
 
`;
const LTextBox = styled.div`
    width: 100%;
    height: 104px;
    line-height: 52px;
    margin-top: 21px;
    color: white;
    font-size: 38px;  //40px
    font-weight: bold;  //40
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InfoTextBox = styled.div`
    width: 100%;
    height: 28px;
    margin-top: 16px;
    color: white;
    font-size: 16px;  
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BtnBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    margin-top: 48px;
`;

const Btn = styled.div`
    width: 380px;
    height:52px;
    margin-bottom: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;  
    cursor: pointer;
`;