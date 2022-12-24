

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(), //sabado 23 julio
            text: 'Nulla consectetur velit id anim nulla in eiusmod. Ipsum quis do reprehenderit sint laboris nisi duis et in minim elit magna. Reprehenderit fugiat deserunt adipisicing veniam laborum. Nisi veniam nulla excepteur pariatur cupidatat irure reprehenderit aliqua culpa.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(), //sabado 23 julio
            text: 'Nulla consectetur velit id anim nulla in eiusmod. Ipsum quis do reprehenderit sint laboris nisi duis et in minim elit magna. Reprehenderit fugiat deserunt adipisicing veniam laborum. Nisi veniam nulla excepteur pariatur cupidatat irure reprehenderit aliqua culpa.',
            picture: null,
        },
    ]
})