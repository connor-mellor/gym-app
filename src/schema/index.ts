import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type WorkoutSet {
    set: Int!
    kg: Float!
    rep: Int!
    complete: Boolean!
  }

  type Workout {
    id: Int!
    workoutName: String!
    sets: [WorkoutSet!]!
  }

  type Session {
    id: String!
    sessionName: String!
    sessionDescription: String!
    workouts: [Workout!]!
  }

  type Query {
    getSessions: [Session] {
      id
      sessionName
      sessionDescription
    }
  }
`;

export default typeDefs;
