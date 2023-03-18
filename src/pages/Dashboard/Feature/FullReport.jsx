import React from 'react'
import styled from 'styled-components'
import bg from '../assets/img/bf1.webp'
import pdfDownload from '../assets/pdf/ProjectReport.pdf'

import {TbFileDownload} from 'react-icons/tb'

const FullReport = () => {

  return (
    <FeatureContainer>
      <Top>
        <div className='fullReportContainer'>
        <h1>Full Report</h1>
        </div>
        <p style={{color: '#FFF37A'}}>/ 2023</p>
      </Top>
      <Bottom>
        <a href={pdfDownload} download='Report/2023'>
          <DownloadReport>
            <p>Download Report</p>
            <div className='icon'>
              <TbFileDownload/>
            </div>
          </DownloadReport>
          </a>
      </Bottom>
    </FeatureContainer>
  )
}

export default FullReport

const FeatureContainer = styled.div`
  width: 28%;
  height: 46.5%;

  border: none;
  border-radius: 2rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  background-color: #4b4b4b;
  
`
const Top = styled.div`
    width: 100%;
    height: 70%;

    margin-top: 1.5rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: row;
    cursor: default;

    .fullReportContainer{
        padding: 0.7rem 2rem;
        border: 1px solid gray;
        border-radius: 5rem;
        background-color: #18181868;
    }

    h1{
        font-size: 1.3em;
        font-weight: 300;
        padding: 0;
        margin: 0;
    }
`
const Bottom = styled.div`
    a{
      text-decoration: none;
    }
`
const DownloadReport = styled.div`
    /* width: 215px; */
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid gray;
    border-radius: 1rem;
    cursor: pointer;

    background-color: #18181873;

    /* padding: 0 2rem; */

    >p{
        color: white;
        font-size: 1.1em;
        font-weight: 400;
        padding: 0 2rem;
    }

    .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      
      font-size: 1.4em;
      color: white;
      border-left: 1px solid gray;

      width: 80px;
      height: 70px;
    }
`