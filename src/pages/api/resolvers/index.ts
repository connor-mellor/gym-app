import { connectToDatabase } from "@/lib/mongodb";
import axios from "axios";

export const resolvers = {
  Query: {
    getSessions: async () => {
      try {
        let { db } = await connectToDatabase();

        const sessions = await db
          .collection("sessions")
          .find()
          .sort({ id: 1 })
          .toArray();

        return sessions;
      } catch (error) {
        throw error;
      }
    },
    getWorkouts: async () => {
      try {
        let { db } = await connectToDatabase();

        const workoutSessions = await db
          .collection("workoutSessions")
          .find()
          .sort({ id: 1 })
          .toArray();

        return workoutSessions;
      } catch (error) {
        throw error;
      }
    },
  },
};
