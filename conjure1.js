
const sugarDonut = (filteredDonuts) =>{
    let mostSugar = 0;
    let sugarName = "";
    filteredDonuts.forEach(el =>{
        if(parseInt(el.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars) > mostSugar){
            mostSugar = parseInt(el.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars);
            sugarName = el.name;
            }
        }
    )

   console.log("El donut con más azucar es " + sugarName)
   console.log("------------------------------")        
   console.log("------------------------------")
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
    console.log("------------------------------")
    console.log("------------------------------")
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
   console.log("------------------------------")
   console.log("------------------------------")
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
   console.log("------------------------------")
   console.log("------------------------------")
}

export {
    sugarDonut,
    ironDonut,
    proteineDonut,
    fiberlessDonut
}