
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



export{
    sugarDonut,
    ironDonut,

}