require('dotenv').config();

const express = require('express');
const expressGraphQL = require('express-graphql');
const defaults = require('graphql-defaults')
const path = require('path');

const app = express();
const port = 3333;

const fetch = import('node-fetch');

const { graphql } = require('@octokit/graphql')

app.listen(port, console.log('The app is running on '+ port));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.resolve('public')));

const graphqlAuth = graphql.defaults({
    headers: {
        authorization: "token " + process.env.GITHUB_PERSONAL_ACCES_TOKEN
    }
})

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