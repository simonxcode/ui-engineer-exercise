import React from 'react'
import { shallow } from 'enzyme'
import People from '../people'

describe('Component - People', () => {
  let props
  
  it('should match snapshot', () => {
    const wrapper = shallow(<People {...props }/>)
    expect(wrapper).toMatchSnapshot()
  })
})
