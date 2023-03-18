import React from 'react'
import styled from 'styled-components'
import BonusRate from './Feature/BonusRate'
import FullReport from './Feature/FullReport'
import ScoreWithAi from './Feature/ScoreWithAi'
import Roi from './Feature/Roi'
import WebsiteTraffic from './Feature/WebsiteTraffic'
import CustomerChurnRate from './Feature/CustomerChurnRate'

const Dashboard = () => {
  return (
    <Container>
      <WebsiteTraffic />
      <FullReport />
      <BonusRate />
      <Roi />
      <ScoreWithAi />
      <CustomerChurnRate />
    </Container>
  )
}

export default Dashboard

const Container = styled.div`
  width: 90%;
  height: 90%;

  margin-left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  flex-wrap: wrap;
`
