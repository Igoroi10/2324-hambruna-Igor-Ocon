
const sugarDonut = (filteredDonuts) =>{
    let mostSugar = 0;
    filteredDonuts.map(el =>{
        if(parseInt(el.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars) > mostSugar)
        mostSugar = parseInt(el.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars);
        }
    )

   const mostSugaredDonut = filteredDonuts.filter(el => parseInt(el.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars) === mostSugar)
   console.log("El donut con más azucar es " + mostSugaredDonut[0].name)
}

const ironDonut = (filteredDonuts) =>{

}



export{
    sugarDonut,
    ironDonut,

}