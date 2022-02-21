import React from "react";
import PropTypes from 'prop-types'

const ActivityPanel = ({activity}) => {

  const activityType = activity.type
  const user = activity.dynamic_data.user_name
  const createDate = activity.created_at
  const createTime = activity.create_at

  return (
    <>
      <p>{activityType}</p>
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