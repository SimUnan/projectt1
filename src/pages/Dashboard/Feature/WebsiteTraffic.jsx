import React from 'react'
import styled from 'styled-components'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const WebsiteTraffic = () => {

    const data = {
        labels: ['Social Media', 'Organic Search'],
        datasets: [
          {
            label: '# of Votes',
            data: [78, 22],
            backgroundColor: [
              'black',
              '#5d5e5e',
              
            ],
            borderColor: [
              'transparent',
              'transparent',
              
            ],
            borderWidth: 1,
            borderRadius: 30,
            cutout: '80%'
          },
        ],
      };

      const options = {
        plugins: {
          legend: {
            display: false,
          }
        }
      }

      const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart, args, pluginOptions){
          const {ctx, data} = chart;

          ctx.save();
          ctx.font = 'bolder 40px sans-serif';
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('12k', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
        }
      }

  return (
    <FeatureContainer>
      <Top>
        <h1>Website Traffic</h1>
        <p style={{cursor: 'pointer'}}>More</p>
      </Top>
      <Middle>
      <Doughnut 
        data={data} 
        options={options}
        plugins={[textCenter]} 
        style={{width:'180px', height:'180px'}}/>
      </Middle>
      <Bottom>
        <div className='socialMedia'>
          <div className='LeftSide'>
            <div className='colorBox'></div>
            <p>Social Media</p>
          </div>
            <p>78%</p>
        </div>
        <div className='organicSearch'>
          <div className='LeftSide'>
            <div className='colorBox'></div>
            <p>Organic Search</p>
          </div>
            <p>22%</p>
        </div>
      </Bottom>
    </FeatureContainer>
  )
}

export default WebsiteTraffic

const FeatureContainer = styled.div`
  width: 28%;
  height: 46.5%;

  border: none;
  border-radius: 2rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  background-color: #FFF37A;
  color: black;
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
        color: gray;
    }
`
const Middle = styled.div`
    margin-bottom: 1.5rem;
`
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

    .socialMedia{
      width: 70%;

      display: flex;
      justify-content: space-between;
      align-items: center;

      padding-bottom: 0.75rem;
      border-bottom: 1px solid gray;
      

      .LeftSide{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
      }

      .colorBox{
        width: 1rem;
        height: 1rem;
        background-color: black;
        border-radius: 0.35rem;
      }

      p{
        padding: 0;
        margin: 0;
        font-weight: 500;
      }
    }

    .organicSearch{
      width: 70%;
      padding-top: 0.75rem;

      display: flex;
      justify-content: space-between;
      align-items: center;      

      .LeftSide{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
      }

      .colorBox{
        width: 1rem;
        height: 1rem;
        background-color: #5d5e5e;
        border-radius: 0.35rem;
      }

      p{
        padding: 0;
        margin: 0;
        font-weight: 500;
      }
    }
`