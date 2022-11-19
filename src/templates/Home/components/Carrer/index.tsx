import carrerData from 'data/carrer.json'

import { Container, CardJob } from './styles'

export function Carrer() {
  return (
    <Container>
      <h2>Carreira</h2>
      {carrerData.map((carrerItem) => (
        <CardJob key={carrerItem.id}>
          <h3>{carrerItem.role}</h3>
          <div className="company-detail">
            <a href={carrerItem.company.site} target="_blank" rel="noreferrer">
              {carrerItem.company.name}
            </a>
            <small>•</small>
            <p>{' ' + carrerItem.company.localization}</p>
          </div>
          <div className="date">
            <small>{`${carrerItem.startDate} – ${carrerItem.endDate} • ${carrerItem.dateText}`}</small>
          </div>
        </CardJob>
      ))}
    </Container>
  )
}