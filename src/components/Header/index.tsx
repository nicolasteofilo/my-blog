import * as S from './styles'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import Link from 'next/link'

export function Header() {
  return (
    <>
      <S.Wrapper>
        <S.HeaderContent>
          <S.Links>
            <S.Logo>NT</S.Logo>
            <nav>
              <a>HOME</a>
              <a className="contact">CONTATO</a>
              <Link href={'/blog'} prefetch>
                <a>BLOG</a>
              </Link>
            </nav>
          </S.Links>
          <S.SocialSection>
            <a
              href="https://github.com/nicolasteofilo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolasteofilo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/onicolateofilo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter size={20} />
            </a>
          </S.SocialSection>
        </S.HeaderContent>
      </S.Wrapper>
    </>
  )
}
