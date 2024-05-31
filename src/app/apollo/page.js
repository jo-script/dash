'use client'
import React, { useEffect } from 'react'
import { ApolloClient, InMemoryCache, gql} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function Page() {

  useEffect(() => {
    client.query({
      query: gql`
        {
          admin_Products_GetAll {
            id
          }
        }
      `,
    })
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Page
