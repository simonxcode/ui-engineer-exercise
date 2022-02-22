import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { default as CloudIcon } from '../../../_starter/shared/Icons/Cloud'
import { default as LinkedInIcon } from '../../../_starter/shared/Icons/LinkedIn'
import { default as TwitterIcon } from '../../../_starter/shared/Icons/Twitter'
import { default as LinkIcon } from '../../../_starter/shared/Icons/Link'

const DisplayName = styled.p`
  font-size: 24px;
  text-align: center;
`

const Title = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`

const PersonCompanyName = styled.button`
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #337AB7;
  display: flex;
  justify-content: center;
`

const ContentIcon = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CloudIconLink = styled.button`
  padding: 0 5px; 
  color: #337AB7;
`

const LinkedInLink = styled.button`
  padding: 0 5px; 
  color: #0077B5;
`

const TwitterLink = styled.button`
  padding: 0 5px; 
  color: #08A0E9;
`

const LinkURL = styled.button`
  color: #3A3A3A;
  border: none;
  background: none;
`

const ProfilePanel = ({contact}) => {

  const displayName = contact.display_name
  const title = contact.title
  const personCompanyName = contact.person_company_name
  const crmURL = contact.crm_url
  const linkedInURL = contact.linkedin_url
  const twitterHandle = contact.twitter_handle
  const personCompanyWebsite = contact.personal_website

  const twitterURL = () => {
    if(twitterHandle) return twitterHandle.replace('@', 'www.twitter.com/')
  }
  
  return (
    <>
      <DisplayName>{displayName}</DisplayName>
      <Title>{title}</Title>
      <PersonCompanyName as='a' href={personCompanyWebsite}>{personCompanyName}</PersonCompanyName>
      <ContentIcon>
        <CloudIconLink as='a' href={crmURL}><CloudIcon /></CloudIconLink>
        <LinkedInLink as='a' href={linkedInURL}><LinkedInIcon /></LinkedInLink>
        <TwitterLink as='a' href={twitterURL()}><TwitterIcon /></TwitterLink>
        <LinkURL as='a' href={personCompanyWebsite}><LinkIcon /></LinkURL>
      </ContentIcon>
    </>
  )
}

ProfilePanel.propTypes = {
  contact: PropTypes.object
}

export default ProfilePanel
