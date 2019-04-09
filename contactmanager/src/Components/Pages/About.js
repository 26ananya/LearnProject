import React from 'react'

export default (props)=> {
  return (
    <div>
      <h1 className="dispaly-4">{props.match.params.id}</h1>
      <p1 className="lead">Simple app to manage contacts</p1>
      <p1 className="text-secondary">Version 1.0.0.0</p1>

    </div>
  )
}
