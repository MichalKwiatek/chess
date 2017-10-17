 const directionsMoves = {
    up: {
        total:-8,
        x: -1,
        y:0
    },
    down:{
        total:8,
        x: 1,
        y:0
    },
    left:{
        total:-1,
        x: 0,
        y:-1
    },
    right:{
        total:1,
        x: 0,
        y:1
    },
    'up-right':{
        total:-7,
        x: -1,
        y:1
    },
    'down-right':{
        total:9,
        x: 1,
        y:1
    },
    'up-left':{
        total:-9,
        x: -1,
        y:-1
    },
    'down-left':{
        total:7,
        x: 1,
        y:-1
    }
}

export default directionsMoves;