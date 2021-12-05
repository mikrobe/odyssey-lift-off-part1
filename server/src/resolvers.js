export const resolvers = {
    Query: {
        // get all tracks, will be used to populate the homepage grid of our web client
        // not used parameters, by convention, are specified with underscore(s)
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        // get a single track by ID, for the track page
        track: (_, {id}, {dataSources}) => {
            return dataSources.trackAPI.getTrack(id);
        }
    },
    Mutation: {
        // increments a track's numberOfViews property
        incrementTrackViews: async (_, {id}, {dataSources}) => {
            try {
                const track = await dataSources.trackAPI.incrementTrackViews(id);
                return {
                    code: 200,
                    success: true,
                    message: `Successfully incremented number of views for track ${id}`,
                    track
                };
            } catch (error) {
                return {
                    code: error.extensions.response.status,
                    success: false,
                    message: error.extensions.response.body,
                    track: null
                }
            };
        }
    },
    Track: {
        // authorId is the property of the object returned by 'tracks' REST call
        writtenBy: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        // get the list of modules of the track
        hasPart: ({id}, _, {dataSources}) => {
            return dataSources.trackAPI.getTrackModules(id);
        },
        durationInSeconds: ({length}) => length,
    },
    Module: {
        durationInSeconds: ({length}) => length,
    },
};

