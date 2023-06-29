import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Sessions {
    id: ID
    sessionName: String
    sessionDescription: String
  }

  type WorkoutSession {
    id: ID
    sessionName: String
    sessionDescription: String
    workouts: [Workout]
  }

  type Workout {
    id: ID
    workoutName: String
    sets: [Set]
  }

  type Set {
    set: Int
    kg: Int
    complete: Boolean
  }

  type Query {
    hello: String
    getSessions: [Sessions]
    getWorkouts: [WorkoutSession]
  }
`;
