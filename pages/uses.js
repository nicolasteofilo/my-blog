import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import categories from '../data/uses'

export async function getStaticProps() {
  const meta = {
    title: 'Uses // Nicolas Teófilo',
    description:
      'Here contains the list of most of the tools that I use in my day-to-day as a developer.',
    tagline: 'Tools. Apps. Gear.',
    image: '/static/images/uses-bw.jpg',
    primaryColor: 'yellow',
    secondaryColor: 'pink'
  }

  return { props: meta }
}

function Uses(props) {
  const { title, description, image } = props

  const renderAll = () => {
    return categories.map((category, index) => {
      return (
        <div key={index}>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map((item, iIndex) => {
              return (
                <li key={iIndex}>
                  <a href={item.url} target="_blank">
                    {item.title}
                  </a>
                  <span> - </span>
                  <span
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      )
    })
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://nicolasteofilo.dev/uses" property="og:url" />
        <meta content={`https://nicolasteofilo.dev${image}`} property="og:image" />
      </Head>

      <p dangerouslySetInnerHTML={{ __html: description }} />

      {renderAll()}
    </>
  )
}

Uses.Layout = Base

export default Uses
