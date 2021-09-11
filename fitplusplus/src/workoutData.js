
export let workoutData = [
    {
        name: "Placeholder Workout",
        id: "placeholder-workout",
        background: "linear-gradient(45deg, #9A77D2, #5B78DD)",
        time: "30 min",
        actions: [
            {
                type: "start",
                name: "Start",
            },
            {
                type: "timer",
                duration: 10_000,
                name: "10 second run",
            },
            {
                type: "counter",
                count: 20,
                duration: 2_000,
                name: "20 pushups",
            },
            {
                type: "text",
                duration: 10_000,
                name: "10 second rest"
            },
            {
                type: "timer",
                duration: 40_000,
                name: "40 second plank",
            },
            {
                type: "finish",
                name: "All done",
            },
        ],
}
]


