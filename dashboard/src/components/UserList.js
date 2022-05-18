import React from 'react';

function UserList(props){
    return (
        <React.Fragment>
            <tr>
                <th>{props.id}</th>
                <td>{props.firstname}</td>
                <td>{props.lastname}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
                <td>{props.userCategory_id}</td>
                <td>
        <img
          src={`/images/users/${props.profileImage}`}
          style={{ width: "100px" }}
          alt={props.name}
        />
      </td>
            </tr>
        </React.Fragment>
    )
}
export default UserList;