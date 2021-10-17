import {Header, Content} from "../components";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
export default function Home({launches}) {
  console.log(launches, "launches")
  return (
    <div>
      <div id="mobile">
      <p className="loader-text">
        <b>🚫 Mobile version...</b>
        <b>View on desktop</b>
      </p>
    </div>
    <div className="uniswap">
      <Header/>
      <div className="container mx-auto px-9">
        <Content/>
      </div>
    </div>
    </div>
  );
}
