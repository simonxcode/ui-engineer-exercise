import React from "react";
import PropTypes from 'prop-types'
import moment from 'moment'

const ActivityPanel = ({activity}) => {

  const activityType = activity.type
  const user = activity.dynamic_data.user_name
  const createDate = moment.utc(activity.created_at).format('MMM D, YYYY')
  const createTime = moment.utc(activity.occurred_at).format('hh:mm A')

  return (
    <>
      {activityType && <p>{activityType}</p>}
      <p>{user}</p>
      <p>{createDate}</p>
      <p>{createTime}</p>
    </>
  )
}

ActivityPanel.propTypes = {
  activity: PropTypes.object
}

export default ActivityPanel
