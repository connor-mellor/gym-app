import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";
import { WorkoutSession } from "@/components/WorkoutSession";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let { db } = await connectToDatabase();

    const sessionsCount = await db.collection("sessions").countDocuments(); // Get the count of existing documents
    const workoutSessionsCount = await db
      .collection("sessions")
      .countDocuments(); // Get the count of existing documents

    const { sessionName, sessionDescription } = JSON.parse(req.body);
    let session = {
      id: sessionsCount + 1,
      sessionName,
      sessionDescription,
    };

    let workoutSession = {
      id: String(workoutSessionsCount + 1),
      sessionName,
      sessionDescription,
      workouts: [],
    };

    const sessions = await db.collection("sessions").insertOne(session);
    const workoutSessions = await db
      .collection("workoutSessions")
      .insertOne(workoutSession);

    console.log("session inserted: ", sessions.insertedId);
    console.log("workoutSession inserted: ", workoutSessions.insertedId);

    res.status(200).json({ success: true });
  } catch (err) {
    console.log("Error inserting session", err);
    res.status(500).json({ error: "Error inserting session" });

    console.log("Error inserting workoutSession", err);
    res.status(500).json({ error: "Error inserting workoutSession" });
  }
}
