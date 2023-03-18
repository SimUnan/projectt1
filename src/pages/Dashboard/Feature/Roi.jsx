import React from 'react'
import styled from 'styled-components'
import {RiBarChartFill} from 'react-icons/ri'

const Roi = () => {
  return (
    <FeatureContainer>
      <Top>
        <div className='leftSide'>
          <RiBarChartFill className='icon'/>
          <h2>ROI</h2>
        </div>
        <p>Details</p>
      </Top>
      <Middle>
        <h2>283%</h2>
        <p>Return On Investment</p>
      </Middle>
    </FeatureContainer>
  )
}

export default Roi

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

  background-color: #37393f;
  
`
const Top = styled.div`
  width: 100%;
  margin-top: 1rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #dddddd;

  .leftSide{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    h2{
      font-weight: 400;
    }

    .icon{
      padding: 0.3em;
      border: none;
      border-radius: 0.4rem;
      font-size: 1.5em;
      background-color: #5b5b5fda;
      color: #FFF37A;
    }
  }

  p{
    color: gray;
    cursor: pointer;
  }
`
const Middle = styled.div`
  width: 70%;
  margin-top: 1rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: #dddddd;

  h2{
    font-size: 4rem;
    font-weight: 300;
    padding: 0;
    margin: 0;
  }

  p{
    color: gray;
    padding: 0;
    margin: 0;

  }
`