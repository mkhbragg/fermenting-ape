import React, { Fragment } from 'react'
import styled from '@emotion/styled'

import monkey from '../assets/images/1F435.svg'
import { Panel } from '../components/global'

export const About: React.FC = () => {
  return (
    <Fragment>
      <Circle>
        <img src={monkey} height="180" alt="smiling monkey" />
      </Circle>
      <Content>
        <h2>We are fermenting apes.</h2>
        <PanelView>Website under construction</PanelView>
      </Content>
    </Fragment>
  )
}

const Circle = styled.div`
  margin: auto;
  height: 200px;
  width: 200px;
  border-radius: 200px;
  background-color: #00c6ae;
  border: 4px solid #18191f;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin: auto;
  }
`

const Content = styled.div`
  text-align: center;
`

const PanelView = styled(Panel)`
  width: 20rem;
  margin: auto;
`
