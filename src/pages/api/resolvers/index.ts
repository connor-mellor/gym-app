import { connectToDatabase } from "@/lib/mongodb";

export const resolvers = {
  Query: {
    hello: () => "hi!",
    getSessions: async () => {
      try {
        let { db } = await connectToDatabase();

        const sessions = await db
          .collection("sessions")
          .find()
          .sort({ id: 1 })
          .toArray();

        return sessions;

        // return await context.db
        //   .collection("sessions")
        //   .find()
        //   .sort({ id: 1 })
        //   .toArray();
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
