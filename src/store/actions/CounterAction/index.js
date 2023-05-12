function increment(data) {
    return {
        type: "increment",
        payload: data
    }
}

function decrement(data) {
    return {
        type: "decrement",
        payload: data
    }
}

function incrementByAmount(data) {
    return {
        type: "incrementByAmount",
        payload: data
    }
}

export {increment, decrement, incrementByAmount}