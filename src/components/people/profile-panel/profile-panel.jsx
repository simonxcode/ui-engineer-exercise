import React from "react";
import PropTypes from 'prop-types'

const PeoplePanel = ({contact}) => {

  const displayName = contact.display_name
  const title = contact.title
  const personCompanyName = contact.person_company_name
  const crmURL = contact.crm_url
  const linkedInURL = contact.linkedin_url
  const twitterHandle = contact.twitter_handle
  const personCompanyWebsite = contact.personal_website

  return (
    <>
      <p>{displayName}</p>
      <p>{title}</p>
      <p><a href={personCompanyWebsite}>{personCompanyName}</a></p>
      <p><a href={crmURL}>Salesforce Icon</a></p>
      <p><a href={linkedInURL}>LinkedIn Icon</a></p>
      <p><a href={twitterHandle}>Twitter Icon</a></p>
      <p><a href={personCompanyWebsite}>Web link Icon</a></p>
    </>
  )
}

PeoplePanel.propTypes = {
  contact: PropTypes.object
}

export default PeoplePanel