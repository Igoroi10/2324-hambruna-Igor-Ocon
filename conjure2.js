
const donutsAndCalories = (filteredDonuts) =>{
    console.log("Listado de donuts y sus calorias");
    filteredDonuts.forEach(el => {
        console.log("Donut: " + el.name + " Calorias: " + el.nutrition_facts.nutrition.calories);
    }) 
    console.log("------------------------------")
    console.log("------------------------------")
}

const donutsAndCarbohydrates = (filteredDonuts) =>{
    console.log("Listado de donuts y sus carbohidratos");
    filteredDonuts.forEach(el => {
        console.log("Donut: " + el.name + " Carbohidratos: " + el.nutrition_facts.nutrition.carbohydrate.daily_value);
    }) 
    console.log("------------------------------")
    console.log("------------------------------")
}

const donutCalorieAverage = (filteredDonuts) => {
    let calorieTotal = 0;
    filteredDonuts.map(el => calorieTotal += el.nutrition_facts.nutrition.calories)
    const calorieAverage = calorieTotal/filteredDonuts.length
    console.log("El promedio de calorias es de " + calorieAverage)
    console.log("------------------------------")
    console.log("------------------------------")
}

const saturatedFatTotal = (filteredDonuts) => {
    let fatTotal = 0;
    filteredDonuts.map(el => fatTotal += parseFloat(el.nutrition_facts.nutrition.fat.fat_type.saturated));
    console.log("El total de gramos de grasas saturadas de todos los donuts es: " + fatTotal);
    console.log("------------------------------")
    console.log("------------------------------")
}

const vitamineAverage = (filteredDonuts) => {
    const eachType = [...filteredDonuts[0].nutrition_facts.nutrition.vitamines];
    eachType.map(el => {
        el.percent = parseFloat(el.percent);
        filteredDonuts.forEach(element => {
            element.nutrition_facts.nutrition.vitamines.map(el1 =>{
                if(el1.type === el.type){
                    el.percent += parseFloat(el1.percent);
                }
            })
        })
    })

    console.log("Typos y porcentaje de cada vitamina:");

    eachType.map(el => {
        console.log("Tipo: " + el.type);
        console.log("Porcentaje promedio: " + (el.percent)/eachType.length);
    })

    console.log("------------------------------")
    console.log("------------------------------")
}

export {
    donutsAndCalories,
    donutsAndCarbohydrates,
    donutCalorieAverage,
    saturatedFatTotal,
    vitamineAverage,
}