# Concept

Ik heb tijdens dit een project een automatisch gegeneerde portolio gemaakt. Alle projecten die op mijn GitHub staan worden automatisch ingeladen op mijn portolio website. Dit gebeurt doormiddel van GraphQL.

# Gebruikte packages

* EJS
* Express
* GraphQL
* DotEnv

# Hoe heb ik GraphQL gebruikt?

,,,

app.get('/', (req, res) => {
  graphqlAuth(`{
    user(login: "Joepkl") {
        repositories(affiliations: OWNER, first: 20, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}) {
          edges {
            node {
              name
              description
              createdAt
              isFork
              owner {
                id
              }
              updatedAt
              url
              openGraphImageUrl
            }
          }
        }
      }
  }`)
  .then((data) => {
      console.log(data.user.repositories.edges)
      res.render('index', {
          data: data.user.repositories.edges
      })
      
  })
})

,,,

# Eindproduct

<img width="1440" alt="Schermafbeelding 2022-06-29 om 22 52 17" src="https://user-images.githubusercontent.com/74242736/176542596-db95eb1a-4bff-4b7d-bd94-0017e0c88ff9.png">

# Installeren

