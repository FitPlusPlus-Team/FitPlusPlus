export let workoutData = [
  {
    name: "30, 30, 30",
    id: "30-30-30",
    background: "linear-gradient(45deg, #9A77D2, #5B78DD)",
    time: "5 min",
    actions: [
      {
        type: "start",
        name: "Start",
      },
      {
        type: "counter",
        duration: 1_000,
        count: 30,
        name: "30 Jumping Jacks",
      },
      {
        type: "timer",
        duration: 30_000,
        name: "30 second High Knees",
      },
      {
        type: "timer",
        duration: 30_000,
        name: "30 second Butt Kicks",
      },
      {
        type: "text",
        duration: 10_000,
        name: "10 second rest",
      },
      {
        type: "counter",
        duration: 3_000,
        name: "30 Squats",
      },
      {
        type: "text",
        duration: 5_000,
        name: "5 second rest",
      },
      {
        type: "timer",
        duration: 30_000,
        name: "30 second Mountain Climbers",
      },
      {
        type: "finish",
        name: "All done",
      },
    ],
  },
  {
    name: "Core Workout",
    id: "core-workout",
    background: "linear-gradient(45deg, #FF3732, #DB883D)",
    time: "8 min",
    actions: [
      {
        type: "start",
        name: "Start",
      },
      {
        type: "counter",
        duration: 3_000,
        count: 20,
        name: "20 Situps",
      },
      {
        type: "text",
        duration: 5_000,
        name: "5 second rest",
      },
      {
        type: "counter",
        duration: 3_000,
        count: 10,
        name: "10 Pushups",
      },
      {
        type: "timer",
        duration: 30_000,
        name: "30 second Mountain Climbers",
      },
      {
        type: "text",
        duration: 10_000,
        name: "10 second rest",
      },
      {
        type: "timer",
        duration: 60_000,
        name: "1 minute Plank",
      },
      {
        type: "text",
        duration: 30_000,
        name: "30 second rest",
      },
      {
        type: "counter",
        duration: 3_000,
        count: 30,
        name: "30 Situps",
      },
      {
        type: "timer",
        duration: 30_000,
        name: "30 second Mountain Climbers",
      },
      {
        type: "timer",
        duration: 20_000,
        name: "20 second Flutter Kicks",
      },
      {
        type: "text",
        duration: 10_000,
        name: "10 second rest",
      },
      {
        type: "counter",
        duration: 2_000,
        count: 20,
        name: "20 Lunges",
      },
      {
        type: "counter",
        duration: 3_000,
        count: 20,
        name: "20 Squats",
      },
      {
        type: "finish",
        name: "All done",
      },
    ],
  },
  {
    name: "Pre-Workout Warmup",
    id: "pre-workout-warmup",
    background: "linear-gradient(45deg, #4FA732, #4BD88D)",
    time: "5 min",
    actions: [
      {
        type: "start",
        name: "Start",
      },
      {
        type: "counter",
        duration: 1_000,
        count: 30,
        name: "30 Jumping Jacks",
      },
      {
        type: "timer",
        duration: 20_000,
        name: "20 second Toe Touches",
      },
      {
        type: "counter",
        duration: 20_000,
        count: 2_000,
        name: "20 Lunges",
      },
      {
        type: "text",
        duration: 10_000,
        name: "10 second rest",
      },
      {
        type: "timer",
        duration: 40_000,
        name: "40 second High Knees",
      },
      {
        type: "timer",
        duration: 40_000,
        name: "40 second Butt Kicks",
      },
      {
        type: "text",
        duration: 10_000,
        name: "10 second rest",
      },
      {
        type: "timer",
        duration: 60_000,
        name: "60 second run",
      },
      {
        type: "timer",
        duration: 30_000,
        name: "30 second Mountain Climbers",
      },
      {
        type: "finish",
        name: "All done",
      },
    ],
  },

  {
    name: "Push Ups Only",
    id: "push-ups-only",
    background: "linear-gradient(125.63deg, #D27779 10.69%, #C35BDD 91.15%)",
    time: "2 min",
    actions: [
      {
        type: "start",
        name: "Start",
      },
      {
        type: "counter",
        duration: 2_000,
        count: 40,
        name: "2 minutes push ups",
      },
      { type: "finish", name: "All done" },
    ],
  },
];
