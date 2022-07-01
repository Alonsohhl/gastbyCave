import { useStaticQuery, graphql } from "gatsby";


export const useMenuQuery = () => {
    const data = useStaticQuery(graphql`

    query MyQuery {
        wpMenu(name: {eq: "mainMenu"}) {
          menuItems {
            nodes {
              label
              url
              id
              childItems {
                nodes {
                  label
                  title
                  url
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            author
            description
            siteUrl
            title
          }
        }
      }




    `)

    return data;
}