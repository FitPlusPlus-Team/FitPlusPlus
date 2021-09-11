
export let workoutData = [
    {
        name: "30's",
        id: "placeholder-workout",
        background: "linear-gradient(45deg, #9A77D2, #5B78DD)",
        time: "15 min",
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
                name: "30 second Butt Kicks"
            },
            {
                type: "text",
                duration: 10_000,
                name: "10 second rest",
            },
            {
                type: "counter",
                duration: 5_000,
                name: "30 Squats"
            },
            {
                type: "text",
                duration: 3_000,
                name: "5 second rest",
            },
            {
                type: "timer",
                duration: 30_000,
                name: "30 second Mountain Climbers"
            },
            {
                type: "finish",
                name: "All done",
            },
        ],
    },

]


