import React from 'react'
import styled from 'styled-components'
import NFT from '../assets/img/nft.png'
import { useNavigate } from 'react-router-dom'

const ScoreWithAi = () => {

  const handleClick = (url) => {
    window.open(url, "_blank");
  }

  return (
    <FeatureContainer style={{backgroundImage: `url(${NFT})`}}>
      <Button onClick={() => handleClick('https://webscore.ai/')}>
        Web Score with AI 
      </Button>
    </FeatureContainer>
  )
}

export default ScoreWithAi

const FeatureContainer = styled.div`
  width: 28%;
  height: 46.5%;

  border: none;
  border-radius: 2rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  color: black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

`
const Button = styled.button`
    background-color: #FFF37A;
    padding: 1rem 3rem;
    margin-top: 75%;
    
    font-size: 1.125em;

    border: none;
    border-radius: 1rem;
    cursor: pointer;
    `