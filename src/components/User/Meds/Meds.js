import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../Navbar/Navbar'
import Sidemenu from '../Sidemenu/Sidemenu'

const Meds = props => {
  return (
    <div>
        <Navbar />
        <Sidemenu />
        Meds
    </div>
  )
}

Meds.propTypes = {}

export default Meds