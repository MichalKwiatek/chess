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
    },
    'knight-left-up': {
        total:-17,
        x: -2,
        y:-1
    },
    'knight-left-down': {
        total:-15,
        x: -2,
        y:1
    },
    'knight-up-left': {
        total:-10,
        x: -1,
        y:-2
    },
    'knight-down-left': {
        total:-6,
        x: -1,
        y:2
    },
    'knight-right-down': {
        total:17,
        x: 2,
        y:1
    },
    'knight-right-up': {
        total:15,
        x: 2,
        y:-1
    },
    'knight-down-right': {
        total:10,
        x: 1,
        y: 2
    },
    'knight-up-right': {
        total:6,
        x: 1,
        y:-2
    },
}

export default directionsMoves;