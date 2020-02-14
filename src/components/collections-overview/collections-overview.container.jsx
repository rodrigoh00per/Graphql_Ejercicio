import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Spinner from "../../components/spinner/spinner.component";
import CollectionsOverViewComponent from "./collections-overview.component";

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverViewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, data }) =>
      loading ? (
        <Spinner />
      ) : (
        <CollectionsOverViewComponent collections={data.collections} />
      )
    }
  </Query>
);

export default CollectionsOverViewContainer;
