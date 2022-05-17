import React from 'react';

function MovieList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.price}</td>
                <td>{props.discount}</td>
                <td>{props.stock}</td>
            </tr>
        </React.Fragment>
    )
}
export default MovieList;