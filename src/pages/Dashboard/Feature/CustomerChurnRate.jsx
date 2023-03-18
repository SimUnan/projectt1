import React from 'react'
import styled from 'styled-components'
import {
    Chart as Chartjs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2'

Chartjs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const CustomerChurnRate = () => {

    const dataa = [11.8, 12.8, 6, 8];
    const dataMax = Math.max(...dataa);
    // console.log(dataMax)

    const maxData = dataa.map((data)=>{
        if(data === dataMax){
            return "#FFF37A"
        }else{
            return "#4e4f55";
        }
    });
  
    const data = {
        labels: ["50-100","100-250","250-500",">$500"],
        datasets: [
            {
                label: '',
                data: dataa,
                backgroundColor: maxData,
                borderRadius: 10,
                barThickness: 30
            }
        ]
    }
    const options = {
        plugins:{
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid:{
                    display: false
                },
            },
            y: {
                min: 0,
                max: 15,
                ticks: {
                    stepSize: 5
                }
            }
        },
        mainainASpectRatio: false
    }
  
    return (
    <FeatureContainer>
        <h1>Cusomter Churn Rate</h1>
      <div className='BarChart'>
        <Bar 
            data={data}
            options={options}
            style={{height: '100%', width: '100%'}}
        />
      </div>
    </FeatureContainer>
  )
}

export default CustomerChurnRate

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

  h1{
    padding: 0;
    margin: 0;
    margin-top: 2rem;
    margin-left: -3rem;
    color: #dddddd;
    font-weight: 400;
  }

  .BarChart{
    margin-top: 5rem;
    width: 380px;
    /* background-color: aqua; */
  }

`