import React, { useState } from 'react'
import { PersonInfo } from '../stateLessComponent/PersonInfo'

export const HPerson = (props) => {
  const [personState, setPersonState] = useState({
    person: [
      { name: "Alex", age: 34 },
      { name: "bob", age: 23 },
      { name: "Curry", age: 24 }
    ],
    otherState: "Other State"
  })

  const updatePersonInformation = () => {
    setPersonState({
      person: [
        { name: "Curry", age: 24 }
      ],
      otherState: "Updated State"
    })
  }
  return (
    <div>
      <button onClick={updatePersonInformation}> Hock</button>
      <PersonInfo name={personState.person[0].name} age={personState.person[0].age} />
    </div>
  )
}
