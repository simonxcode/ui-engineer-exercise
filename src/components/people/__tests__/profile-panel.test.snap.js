import React from 'react'
import PropTypes from 'prop-types'
import { shallow } from 'enzyme'
import ProfilePanel from '../profile-panel'

describe('Component - ProfilePanel', () => {
  let props

  beforeEach(() => {
    props = {
      contact: PropTypes.object
    }
  })
  
  it('should match snapshot', () => {
    const wrapper = shallow(<ProfilePanel {...props }/>)
    expect(wrapper).toMatchSnapshot()
  })
})
