import React from 'react'
import styled from 'styled-components'

export default function Page ({ data }) {
  const { name, type, goal, id, artifact } = data
  return (
    <div>
      <h1>{name}</h1>
      <h2>{type} class</h2>
      <div>
        <p>{goal}</p>
        <p><a href={artifact.url}>OPEN ARTIFACT</a></p>
      </div>
    </div>
  )
}