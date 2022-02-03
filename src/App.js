import React from 'react'
import site from './site.json'
import styled from 'styled-components'
import { HashRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Page from './Page'

function App() {
  return (
    <Router>
      <Container>
        <Title>Portfolio</Title>
        <Subtitle>Brendan Best, UW-STOUT 2020, ICT-MS</Subtitle>
        <Table>
          <Row style={{ marginBottom: '10px' }}>
            <HeaderCell style={{ width: '100px' }}>Class</HeaderCell>
            <HeaderCell style={{ width: '600px' }}>Goal</HeaderCell>
            <HeaderCell style={{ width: '100px' }}>Artifact</HeaderCell>
          </Row>
          {site.classes.map(item => (
            <Row key={item.id} type={item.type}>
              <NameCell>
                <Link to={`/${item.id}`}>{item.name}</Link>
              </NameCell>
              <GoalCell>{item.goal}</GoalCell>
              <LinkCell><ButtonLink href={item.artifact.url}>VIEW</ButtonLink></LinkCell>
            </Row>
          ))}
        </Table>
      </Container>
      <Switch>
        {site.classes.map(item => (
          <Route path={`/${item.id}`} key={item.id}>
            <Page data={item} />
          </Route>
        ))}
      </Switch>
    </Router>
  )
}

const Container = styled.div`
  margin: 24px auto;
  width: 800px;
`

const Title = styled.h1`
  margin: 0;
  margin-bottom: 10px;
  font: 36px sans-serif;
`

const Subtitle = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  font: 20px sans-serif;
`

const Table = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;

  &:hover {
    background: #efefef;
  }
`

const Cell = styled.div`
  border: 1px solid #999;
  padding: 10px;
`

const HeaderCell = styled(Cell)`
  border: 0;
  font-weight: 500;
`

const NameCell = styled(Cell)`
  width: 100px;
  color: #444;
  font-weight: 500;
`

const GoalCell = styled(Cell)`
  border-right: 0;
  border-left: 0;
  width: 600px;
  text-align: left;
  padding: 10px 20px 20px;
`

const LinkCell = styled(Cell)`
  width: 100px;
`

const ButtonLink = styled.a`
  background: #229933;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  display: block;
  padding: 5px;
  text-align: center;
  font-size: 14px;

  &:hover {
    background: #33aa44;
  }
`

export default App
