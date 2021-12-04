import { gql } from 'apollo-server';

export const typeDefs = gql`
type Query {
    "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
        track(id: ID!): Track
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
"long description"
    description: String
"how many times it's been viewed"
    numberOfViews: Int
"the track's complete list of modules"
    hasPart: [Module!]!
}

"Author of a complete Track or Module"
type Author {
    id: ID!
    name: String!
    photo: String
}

"Module contained in multiple tracks"
type Module {
    id: ID!
    "the module's title"
    title: String!
    "the module's length in minutes"
    length: Int
}
`;

