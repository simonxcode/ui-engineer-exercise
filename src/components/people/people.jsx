import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import axios from 'axios'
import PropTypes from 'prop-types'
import ProfilePanel from './profile-panel'
import ActivityPanel from './activity-panel'

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
  const [contact, setContact] = useState({})
  const [activity, setActivity] = useState([])

  useEffect(() => {
    axios.get('https://ui-offline-exercise.s3.amazonaws.com/data/people.json')
      .then((res) => {
        console.log(res)
        setContact(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    axios.get('https://ui-offline-exercise.s3.amazonaws.com/data/past_activities/1.json')
      .then((res) => {
        console.log(res)
        setActivity(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
     <Header>People</Header>
    <Content>
      <LeftColumn>
        <Panel>
          <ProfilePanel contact={contact} /> 
        </Panel>
        <BlankPanel />
        <BlankPanel />
        <BlankPanel />
      </LeftColumn>
      <CenterColumn>
        <Panel>
          {activity.map(activity => (
            <ActivityPanel key={activity.id} activity={activity} />
            ))}
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

People.propsTypes = {
  contact: PropTypes.object,
  activity: PropTypes.object
}

export default People

