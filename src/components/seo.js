import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
const SEO = ({ title, description, image, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          siteTitle,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
        },
      },
    }) => {
      const seo = {
        title,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`,
      }
      return (
        <>
          <Helmet
            title={seo.title}
            titleTemplate={`${seo.title} · ${siteTitle}`}
            htmlAttributes={{
              lang: 'en',
            }}
          >
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
          </Helmet>
        </>
      )
    }}
  />
)
export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`

// import React from "react"
// import { Helmet } from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

// const Head = ({ title }) => {
//     const data = useStaticQuery(graphql`
//         query {
//             site {
//                 siteMetadata {
//                     title
//                     author {
//                         fullName
//                         location
//                     }
//                 }
//             }
//         }
//     `)
//     return (
//         <Helmet>
//             <title>
//                 {`${title} | ${data.site.siteMetadata.title}`.toLowerCase()}
//             </title>
//             <meta
//                 name="description"
//                 content={`${data.site.siteMetadata.author.fullName} - ${data.site.siteMetadata.author.tagline}`}
//             />
//         </Helmet>
//     )
// }

// export default Head
