import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import moment from 'moment'
import { default as VoicemailIcon } from '../../../_starter/shared/Icons/Voicemail'
import { default as BadgeIcon } from '../../../_starter/shared/Icons/Badge'
import { default as EnvelopeIcon } from '../../../_starter/shared/Icons/Envelope'
import { default as PhoneIcon } from '../../../_starter/shared/Icons/Phone'
import { default as ReplyIcon } from '../../../_starter/shared/Icons/Reply'
import { default as RocketIcon } from '../../../_starter/shared/Icons/Rocket'

const Main = styled.div`
  display: flex;
`

const ActivityIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

const ActivityContent = styled.div`
  display: flex;
  width: 100%;
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

  const getActivityIcon = () => {
    if(activityType === 'voicemail') {
      return <VoicemailIcon />
    } else if (activityType === 'success') {
      return <BadgeIcon />
    } else if (activityType === 'sent_email') {
      return <EnvelopeIcon />
    } else if (activityType === 'call') {
      return <PhoneIcon />
    } else if (activityType === 'email_reply') {
      return <ReplyIcon />
    } else if (activityType === 'added_to_cadence') {
      return <RocketIcon />
    }
  } 

  return (
    <Main>
      <ActivityIcon>{getActivityIcon()}</ActivityIcon>
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
    </Main>
  )
}

ActivityPanel.propTypes = {
  activity: PropTypes.object
}

export default ActivityPanel
