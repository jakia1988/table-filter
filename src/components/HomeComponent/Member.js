import React from 'react'

export const Member = (props) => {
    return (
    <div className="alert alert-primary" role="alert">
        <select>                
          {props.info.map((i,key)=>
             <option key={key} value={i.member.partyId}>{i.member.firstName} {i.member.lastName}</option>
          )}
          </select>
     
    </div>
  )
}
