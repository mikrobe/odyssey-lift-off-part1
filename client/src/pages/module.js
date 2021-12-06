import { gql, useQuery } from '@apollo/client';
import { Layout, ModuleDetail, QueryResult } from '../components';

const GET_MODULE = gql`
query getModule($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title
      content
      videoUrl
    }
    track(id: $trackId) {
      id
      title
      hasPart {
        id
        title
        durationInSeconds
      }
    }
  }
`;

export const Module = ({ trackId, moduleId }) => {
    const { loading, error, data } = useQuery(GET_MODULE, {
        variables: { trackId, moduleId }
    });
    return (
        <Layout fullWidth>
            <QueryResult error={error} data={data} loading={loading}>
                <ModuleDetail track={data?.track} module={data?.module} />
            </QueryResult>
        </Layout>
    )
}
