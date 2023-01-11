import React from 'react'
import './Sidemenu.css'

export class Sidemenu extends React.Component {

  constructor(props){
    super(props);
    this.handleMenu = this.handleMenu.bind(this);
    this.state = {
      menuElements: [
        { id: 'Users', title: 'Użytkownicy' },
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
        return <button 
        onClick={this.handleMenu}
        key={e.id}
        value={e.id}
        className="adminPanel__sidemenu__buttons-menu">{e.title}</button>
      }
    )

    return (
      <div className='adminPanel__sidemenu__buttons-container flex__center'>
        {menuElements}
      </div>
    )
  }
}

export default Sidemenu