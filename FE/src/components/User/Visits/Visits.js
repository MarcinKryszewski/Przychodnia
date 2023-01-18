import React, { Fragment, useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { Context } from '../../../Store';

import './Visits.css';

function Visits () {

  const [visitList, setVisitList] = useState([]);
  const [state] = useContext(Context);
  
  const GetVisits = async () => {
    const res = await axios.get(process.env.REACT_APP_SERVER_URL + "/visits/" + state.userId);
    setVisitList(res.data);
  };

  useEffect(() => {
    GetVisits();
  }, );

  return (
    <div className='userPanel__visits_visit' >
      <table id="userPanel__visits_table">
      <colgroup>
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th >USERNAME</th>
          <th >VISITNAME</th>
        </tr>
        </thead>
        <tbody>
        {visitList.map(visit =>(
        <Fragment key={visit._id}>
          <tr>
            {visit.user.map(user =>(<td key={user._id}>{user.username}</td>))}
            <td>{visit.visitname}</td>
          </tr>
        </Fragment>
      ))}
      </tbody>
      </table>
    </div>
  )
}

export default Visits