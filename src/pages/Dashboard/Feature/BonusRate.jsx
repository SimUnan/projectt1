import React from 'react'
import styled from 'styled-components'
import {RxArrowTopRight} from 'react-icons/rx'
import { currentDate } from '../function/currentDate'


const BonusRate = () => {

    const days = ["Sun" ,"Mon", "Tue","Wen","Thru", "Fri", "Sat"];
    const d = new Date();

    const day = days[d.getDay()];
    const dayy = d.getDate();
    console.log(day.length);

  return (
    <FeatureContainer>
      <Top>
        <h1>Bounce Rate</h1>
        <RxArrowTopRight className='icon'/>
      </Top>
      <Middle>
        <div className='DayBox'>
            <p>{day == days ? day : days[day.length+1]}</p>
            <h2>{dayy - 1}</h2>
        </div>
        <div className='DayBox' style={{
            backgroundColor: '#FFF37A',
            borderColor: "#FFF37A"
            }}>
            <p>{day}</p>
            <h2>{dayy}</h2>
        </div>
        <div className='DayBox'>
            <p>{day == days ? day : days[day.length+3]}</p>
            <h2>{dayy + 1}</h2>
        </div>
      </Middle>
      <Bottom>
        <div className='leftSide'>
            <h1>23%</h1>
        </div>
        <div className='rightSide'>
            <h4>-10%</h4>
            <p>since last day</p>
        </div>
      </Bottom>
    </FeatureContainer>
  )
}

export default BonusRate

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

  background-color: #DCDCDC;
  
`
const Top = styled.div`
    width: 100%;
    height: 25%;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    cursor: default;
    h1{
        font-size: 1.5em;
        font-weight: bold;
        padding: 0;
        margin: 0;
    }
    p{
        margin-top: 1.5rem;
    }

    .icon{
        background-color: black;
        color: white;

        padding: 0.8rem;
        border-radius: 50%;

        font-size: 1.5em;
        cursor: pointer;
    }
`
const Middle = styled.div`
    width: 100%;
    height: 40%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: default;

    .DayBox{
        width: 20%;
        height: 65%;
        background-color: transparent;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.6rem;

        border: 1px solid gray;
        border-radius: 1.25rem;

        p{
            padding: 0;
            margin: 0;
            color: gray;
        }
        h2{
            padding: 0;
            margin: 0;
        }
    }
`
const Bottom = styled.div`
    width: 100%;

    margin-top: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;

    .leftSide{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 50%;

        h1{
            font-size: 4.5em;
            font-weight: 400;
            padding: 0;
            margin: 0;
        }
    }

    .rightSide{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        /* padding-left: 1rem; */

        border-left: 1px solid gray;
        width: 50%;
        height: 65%;

        h4{
            padding: 0;
            margin: 0;
            margin-left: 2rem;
        }
        p{
            padding: 0;
            margin: 0;
            margin-left: 2rem;
        }
    }

`