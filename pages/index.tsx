import {Header, Content} from "../components";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
export default function Home({launches}) {
  console.log(launches, "launches")
  return (
    <div>
      <Header/>
      <Content/>
    </div>
  );
}


// export async function getStaticProps() {
//   const client = new ApolloClient({
//     uri: 'https://api.spacex.land/graphql/',
//     cache: new InMemoryCache()
//   });
//   const { data } = await client.query({
//     query: gql`
//       query GetLaunches {
//         launchesPast(limit: 10) {
//           id
//           mission_name
//           launch_date_local
//           launch_site {
//             site_name_long
//           }
//           links {
//             article_link
//             video_link
//             mission_patch
//           }
//           rocket {
//             rocket_name
//           }
//         }
//       }
//     `
//   });
//   console.log(data, "data")
//   return {
//     props: {
//       launches: []
//     }
//   }
// }