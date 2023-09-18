
const sugarDonut = (filteredDonuts) =>{
    let mostSugar = 0;
    filteredDonuts.forEach(el =>{
        if(parseInt(el.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars) > mostSugar)
        mostSugar = parseInt(el.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars);
        }
    )

   const mostSugaredDonut = filteredDonuts.filter(el => parseInt(el.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars) === mostSugar)
   console.log("El donut con más azucar es " + mostSugaredDonut[0].name)
}

const ironDonut = (filteredDonuts) =>{
    let mostIron = 0;
    let mostIronName = "";
    filteredDonuts.map(el => {
        el.nutrition_facts.nutrition.vitamines.forEach(element => {
            if(element.type === "Iron" && parseInt(element.percent) > mostIron){
                mostIron = parseInt(element.percent);
                mostIronName = el.name;
            }

        })
    });

    console.log("El donut con más hierro es " + mostIronName);
}

const proteineDonut = (filteredDonuts) =>{
    let mostProteine = 0;
    let proteineName = ""
    filteredDonuts.forEach(el =>{
        if(parseInt(el.nutrition_facts.nutrition.proteine) > mostProteine){
            mostProteine = parseInt(el.nutrition_facts.nutrition.proteine);
            proteineName = el.name;
        }

        }
    )

   console.log("El donut con más proteina es " + proteineName);
}

const fiberlessDonut = (filteredDonuts) =>{
    let lessFibre = 1000;
    let fibreName = "";
    filteredDonuts.forEach(el =>{
            if(parseInt(el.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre) < lessFibre){
                lessFibre = parseInt(el.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre);
                fibreName = el.name;
            }
        }
    )

   console.log("El donut con menos fibra es " + fibreName)
}

const donutsAndCalories = (filteredDonuts) =>{
    console.log("Listado de donuts y sus calorias");
    filteredDonuts.forEach(el => {
        console.log("Donut: " + el.name + " Calorias: " + el.nutrition_facts.nutrition.calories);
    }) 
}

const donutsAndCarbohydrates = (filteredDonuts) =>{
    console.log("Listado de donuts y sus carbohidratos");
    filteredDonuts.forEach(el => {
        console.log("Donut: " + el.name + " Carbohidratos: " + el.nutrition_facts.nutrition.carbohydrate.daily_value);
    }) 
}

const donutCalorieAverage = (filteredDonuts) => {
    let calorieTotal = 0;
    filteredDonuts.map(el => calorieTotal += el.nutrition_facts.nutrition.calories)
    const calorieAverage = calorieTotal/filteredDonuts.length
    console.log("El promedio de calorias es de " + calorieAverage)
}

const saturatedFatTotal = (filteredDonuts) => {
    let fatTotal = 0;
    filteredDonuts.map(el => fatTotal += parseFloat(el.nutrition_facts.nutrition.fat.fat_type.saturated));
    console.log("El total de gramos de grasas saturadas de todos los donuts es: " + fatTotal);
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
}

const donutsButters = (filteredDonuts) => {
    filteredDonuts.forEach( el => {
        console.log("Lista de masas posibles de " + el.name + ":");
        el.batters.batter.forEach(element => {
            console.log("Type: " + element.type);
        })
        console.log("------------------------------")
    })
}

export{
    sugarDonut,
    ironDonut,
    proteineDonut,
    fiberlessDonut,
    donutsAndCalories,
    donutsAndCarbohydrates,
    donutCalorieAverage,
    saturatedFatTotal,
    vitamineAverage,
    donutsButters,


}