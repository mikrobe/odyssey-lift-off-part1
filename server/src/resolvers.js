export const resolvers = {
    Query: {
        // get all tracks, will be used to populate the homepage grid of our web client
        // not used parameters, by convention, are specified with underscore(s)
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        }
    },
    Track: {
        // authorId is the property of the object returned by 'tracks' REST call
        writtenBy: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        }
    }
};

