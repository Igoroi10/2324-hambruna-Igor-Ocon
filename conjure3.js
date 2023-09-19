const donutsButters = (filteredDonuts) => {
    filteredDonuts.forEach( el => {
        console.log("Lista de masas posibles de " + el.name + ":");
        el.batters.batter.forEach(element => {
            console.log(element.type);
        })
        console.log("------------------------------")
    })
    console.log("------------------------------")
    console.log("------------------------------")
}

const donutsToppings = (filteredDonuts) => {
    filteredDonuts.forEach( el => {
        console.log("Lista de toppings posibles de " + el.name + ":");
        el.topping.forEach(element => {
            console.log( element.type);
        })
        console.log("------------------------------")
    })
    console.log("------------------------------")
    console.log("------------------------------")
}

export {
    donutsButters,
    donutsToppings,
}