import { gql, useQuery } from '@apollo/client';
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

const GET_TRACK = gql`
    query getTrack($trackId: ID!) {
        track(id: $trackId) {
        id
        title
        writtenBy {
            id
            name    
            photo
        }
        thumbnail
        length
        modulesCount
        numberOfViews
        hasPart {
            id
            title
            length
        }
        description
        }
    }
`;

export const Track = ({ trackId }) => {
    const { loading, error, data } = useQuery(GET_TRACK, { 
        variables: { trackId }
    });

    return (
        <Layout>
            <QueryResult error={error} data={data} loading={loading}>
                <TrackDetail track={data?.track} />
            </QueryResult>
        </Layout>
    )
}
