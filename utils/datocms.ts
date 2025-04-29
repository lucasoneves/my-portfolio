// lib/datocms.ts
import { GraphQLClient } from "graphql-request";

const endpoint = "https://graphql.datocms.com/";

export const datoCMSClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`,
  },
});
