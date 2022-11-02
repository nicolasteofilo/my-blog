import { Bio } from 'components/Bio'
import { Title } from 'components/Title'

import { Container, HiMessage } from './styles'

export function Main() {
  return (
    <>
      <Container>
        <Title>Sobre mim</Title>
        <HiMessage>
          Olá, eu sou <span>Nicolas Teófilo</span> 👋🏻
        </HiMessage>
        <Bio />
      </Container>
    </>
  )
}
