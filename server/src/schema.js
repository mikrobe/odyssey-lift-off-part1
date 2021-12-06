import { gql } from 'apollo-server';

export const typeDefs = gql`
type Query {
    "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
        track(id: ID!): Track
        module(id: ID!): Module
}

type Mutation {
    "increment number of track's views"
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
}

type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Contains the human-readable message for the UI"
    message: String!
    "the updated track after a successful mutation"
    track: Track
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
    "track's length in seconds"
    length: Int @deprecated(reason: "Use durationInSeconds")
"the track's full duration in seconds"
    durationInSeconds: Int
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
    "the module's length in seconds"
    length: Int @deprecated(reason: "Use durationInSeconds")
    "the module's full duration in seconds"
    durationInSeconds: Int
    "the module's video url, for video-based modules"
    videoUrl: String
    "the module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript"
    content: String
}
`;

