import React from 'react'

export class Sidemenu extends React.Component {

  constructor(props){
    super(props);
    this.handleMenu = this.handleMenu.bind(this);
    this.state = {
      menuElements: [
        { id: 'Visits', title: 'Wizyty' },
        { id: 'Prescriptions', title: 'Recepty' },
        { id: 'Referals', title: 'Skierowania' },
        { id: 'Meds', title: 'Leki stałe' },
        { id: 'Sickleaves', title: 'Zwolnienia' }
      ]
    };
  }
  
  handleMenu (e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const menuElements = this.state.menuElements.map(
      e => {
        return <button onClick={this.handleMenu} key={e.id} value={e.id}>{e.title}</button>
      }
    )

    return (
      <div>
        {menuElements}
      </div>
    )
  }
}

export default Sidemenu