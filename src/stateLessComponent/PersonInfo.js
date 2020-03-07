import React from 'react'

export const PersonInfo = (props) => {
  return (
    <div>
      <h1>Hi my name is {props.name}</h1>
      <h1>And my age is {props.age}</h1>
    </div>
  )
}
