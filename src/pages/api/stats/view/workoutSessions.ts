export default function handler(req: any, res: any) {
  res.status(200).json(
    [
      {
        id: "1",
        sessionName: "Pull Session",
        sessionDescription: 'Today didn\'t feel too mint, did me bess - somfin better than nuffin',
        workouts: [
          {
            id: 1,
            workoutName: "Lateral Pulldown",
            sets: [
              {
                set: 1,
                kg: 15,
                rep: 8,
                complete: false,
              },
              {
                set: 2,
                kg: 25,
                rep: 12,
                complete: false,
              },
              {
                set: 3,
                kg: 20,
                rep: 6,
                complete: true,
              },
            ]
          },
          {
              id: 2,
              workoutName: "Bicep Curl",
              sets: [
                {
                  set: 1,
                  kg: 15,
                  rep: 8,
                  complete: false,
                },
                {
                  set: 2,
                  kg: 25,
                  rep: 12,
                  complete: false,
                },
                {
                  set: 3,
                  kg: 20,
                  rep: 6,
                  complete: true,
                },
              ]
          },
        ],
      },
      {
        id: "2",
        sessionName: "Push Session",
        sessionDescription: 'description of workout here ...',
        workouts: [
          {
              id: 1,
              workoutName: "Bench Press",
              sets: [
                {
                  set: 1,
                  kg: 15,
                  rep: 8,
                  complete: false,
                },
                {
                  set: 2,
                  kg: 25,
                  rep: 12,
                  complete: false,
                },
                {
                  set: 3,
                  kg: 20,
                  rep: 6,
                  complete: true,
                },
              ]
          },
          {
            id: 2,
            workoutName: "Shoulder Press",
            sets: [
              {
                set: 1,
                kg: 15,
                rep: 8,
                complete: false,
              },
              {
                set: 2,
                kg: 25,
                rep: 12,
                complete: false,
              },
              {
                set: 3,
                kg: 20,
                rep: 6,
                complete: true,
              },
            ]
          },
        ],
      },
      {
        id: "3",
        sessionName: "Legs Session",
        sessionDescription: 'description of workout here ...',
        workouts: [
          {
              id: 1,
              workoutName: "Hack Squats",
              sets: [
                {
                  set: 1,
                  kg: 15,
                  rep: 8,
                  complete: false,
                },
                {
                  set: 2,
                  kg: 25,
                  rep: 12,
                  complete: false,
                },
                {
                  set: 3,
                  kg: 20,
                  rep: 6,
                  complete: true,
                },
              ]
          },
          {
            id: 2,
            workoutName: "Calf Raises",
            sets: [
              {
                set: 1,
                kg: 15,
                rep: 8,
                complete: false,
              },
              {
                set: 2,
                kg: 25,
                rep: 12,
                complete: false,
              },
              {
                set: 3,
                kg: 20,
                rep: 6,
                complete: true,
              },
            ]
          },
        ],
      },
      {
        id: "4",
        sessionName: "Abs Session",
        sessionDescription: 'description of workout here ...',
        workouts: [
          {
              id: 1,
              workoutName: "Russain Twists",
              sets: [
                {
                  set: 1,
                  kg: 15,
                  rep: 8,
                  complete: false,
                },
                {
                  set: 2,
                  kg: 25,
                  rep: 12,
                  complete: false,
                },
                {
                  set: 3,
                  kg: 20,
                  rep: 6,
                  complete: true,
                },
              ]
          },
          {
            id: 2,
            workoutName: "Ab Crunches",
            sets: [
              {
                set: 1,
                kg: 15,
                rep: 8,
                complete: false,
              },
              {
                set: 2,
                kg: 25,
                rep: 12,
                complete: false,
              },
              {
                set: 3,
                kg: 20,
                rep: 6,
                complete: true,
              },
            ]
          },
        ],
      },
    ]
  )
}