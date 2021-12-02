import { gql } from 'apollo-server';

export const typeDefs = gql`
type Query {
    "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
}

"A track is a group of Modules that teaches about a specific topic"
type Track {
"unique identifier as URI"
    id: ID!
"The preferred tracks label"
    title: String!
"track's author"
    writtenBy: Author!
"visually represented with"
    thumbnail: String
"how many chars?"
    length: Int
"number of contained modules"
    modulesCount: Int
}

"Author of a complete Track or Module"
type Author {
    id: ID!
    name: String!
    photo: String
}
`;

