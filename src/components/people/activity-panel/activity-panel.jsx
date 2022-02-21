import React from "react";
import styled from 'styled-components'
import PropTypes from 'prop-types'

import moment from 'moment'

const ActivityContent = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #E5E5E5;
  margin: 20px;
  padding: 0 16px;
`

const LeftColumn = styled.div`
  display: block;
`

const ActivityType = styled.p`
  font-size: 14px;
  font-weight: 600;
`

const UserName = styled.p`
  font-size: 12px;
  font-weight: 400; 
  color: #7A7F88;
`

const RightColumn = styled.div`
  display: block;
`

const CreateDate = styled.p`
  font-size: 12px;
  weight: 600;
  color: #7A7F88;
`

const CreateTime = styled.p`
  font-size: 12px;
  weight: 600;
  margin: 0;
  float: right;
  color: #7A7F88;
`

const ActivityPanel = ({activity}) => {

  const activityType = activity.type
  const userName = activity.dynamic_data.user_name
  const createDate = moment.utc(activity.created_at).format('MMM D, YYYY')
  const createTime = moment.utc(activity.occurred_at).format('hh:mm A')

  return (
    <>
    <ActivityContent>
      <LeftColumn>
        <ActivityType>{activityType}</ActivityType>
        <UserName>{userName}</UserName>
      </LeftColumn>
      <RightColumn>
        <CreateDate>{createDate}</CreateDate>
        <CreateTime>{createTime}</CreateTime>
      </RightColumn>
    </ActivityContent>
    </>
  )
}

ActivityPanel.propTypes = {
  activity: PropTypes.object
}

export default ActivityPanel
