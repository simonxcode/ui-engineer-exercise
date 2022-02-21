import React from "react";
import styled from 'styled-components'
import ProfilePanel from './profile-panel'
import Activity from './activity-panel'

const Header = styled.div`
  display: block;
  background-color: #FFFFFF;
  border-bottom: 1px solid #E5E5E5; 
`
const Content = styled.div`
  display: flex;
  padding: .5rem;
`

const LeftColumn = styled.div`
  width: 25%
`

const CenterColumn = styled.div`
  width: 50%
`

const RightColumn = styled.div`
  width: 25%;
`

const Panel = styled.div`
  margin: .5rem;
  background-color: #FFFFFF;
  border: 1px solid #E5E5E5; 
`

const BlankPanel = styled(Panel)`
  height: 166px;
`

const People = () => {
  return (
    <>
     <Header>People</Header>
    <Content>
      <LeftColumn>
        <Panel>
          <ProfilePanel /> 
        </Panel>
        <BlankPanel />
        <BlankPanel />
        <BlankPanel />
      </LeftColumn>
      <CenterColumn>
        <Panel>
          <Activity />  
        </Panel>
      </CenterColumn>
      <RightColumn>
        <BlankPanel />
        <BlankPanel />
        <BlankPanel />
        <BlankPanel />
      </RightColumn>
    </Content>    
    </>
  )
}

export default People

