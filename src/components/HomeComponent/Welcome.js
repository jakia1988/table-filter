import React from 'react'

export const Welcome = (props) => {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h2 className="display-4">Welcome back, {props.name.firstName} {props.name.lastName}</h2>
            <p className="lead">Last Login at : {props.name.lastLogin}</p>
        </div>
    </div>
  )
}
