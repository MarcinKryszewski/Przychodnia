import React, { Component } from 'react'

export class Visits extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       visitElements: [
        {
          id: 1,
          visitDate: '2022-12-01',
          doctor: 'Stefan Nowak',
          doctorPhone: 123456789,
          doctorType: 'Pediatra',
          visitLocationCity: '82-300 Elbląg',
          visitLocationClinicName: 'PPL Jaśminowa',
          visitLocationClinicAddress: 'Robotnicza 79/X',
          visitStatus: true
        },
        {
          id: 2,
          visitDate: '2022-10-01',
          doctor: 'Stefan Nowak',
          doctorPhone: 123456789,
          doctorType: 'Pediatra',
          visitLocationCity: '82-300 Elbląg',
          visitLocationClinicName: 'PPL Jaśminowa',
          visitLocationClinicAddress: 'Robotnicza 79/X',
          visitStatus: true
        }
       ]
    }
  }

  render() {
    const visitElements = this.state.visitElements.map(
      e => {
        return <div>
          <div>{e.visitDate}</div>
          <div>{e.doctor}</div>
        </div>
      }
    )
    return (
      <div>{visitElements}</div>
    )
  }
}

export default Visits