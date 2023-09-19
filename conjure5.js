const transFatModify = (filteredDonuts) => {
    console.log("Los donuts con más de 12% de colesterol tienen 3.2g de grasas trans ahora");
    filteredDonuts.map(el => {
        if(parseInt(el.nutrition_facts.nutrition.cholesterol.daily_value) > 12)
            el.nutrition_facts.nutrition.fat.fat_type.trans = "3.2g"

        console.log(el.name + ": cantidad de colesterol: " + el.nutrition_facts.nutrition.cholesterol.daily_value + " cantidad de grasas trans: " + el.nutrition_facts.nutrition.fat.fat_type.trans)
    })
    console.log("------------------------------")
    console.log("------------------------------")
}

const carbohydrateModify = (filteredDonuts) => {
    console.log("Los donuts con más de 50 de azúcar tienen 42g de carbohidratos ahora");
    filteredDonuts.map(el => {
        if(parseInt(el.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars) > 50)
        el.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount = "42g"

        console.log(el.name + ": cantidad de azúcar: " + el.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars + " cantidad de carbohidratos: " + el.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount)
    })
    console.log("------------------------------")
    console.log("------------------------------")
}


const modifyAllCarbohydratesDailyValue = (filteredDonuts) => {
    console.log("Modificamos toda la ingesta diaria de carbohidratos en los donuts al 53%")
    filteredDonuts.map(el => {
        el.nutrition_facts.nutrition.carbohydrate.daily_value = "53%";
        console.log(el.name + ": ingesta diaria de carbohidratos: " + el.nutrition_facts.nutrition.carbohydrate.daily_value);
    })
    console.log("------------------------------")
    console.log("------------------------------")
}

const fusionAddNitricine = (filteredDonuts) =>{
    console.log("Añadimos nitacina a el donut con el nombre Fusion");

    const nitacine = {
        type: "Nitacine",
        percent: "2%"
    }

    filteredDonuts.map(el => {
        if(el.name.includes("Fusion"))
            el.nutrition_facts.nutrition.vitamines.push(nitacine);
    
        console.log(el.name)
        console.log(el.nutrition_facts.nutrition.vitamines)
     })

    console.log("------------------------------")
    console.log("------------------------------")
}

const addAlergen = (filteredDonuts) => {

    console.log("Añadimos gluten free como alergeno al donut con nombre relaxing")
    filteredDonuts.map(el => {
        if(el.name.includes("Relaxing")){
            el.alergen = "Gluten Free";

            console.log(el.name + ": alergenos: " + el.alergen);
        }
    })
    console.log("------------------------------")
    console.log("------------------------------")
}

export {
    transFatModify,
    carbohydrateModify,
    modifyAllCarbohydratesDailyValue,
    fusionAddNitricine,
    addAlergen
}