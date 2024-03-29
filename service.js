import fetch from 'cross-fetch'; // Comentar en caso de error de fetch
import { sugarDonut,ironDonut, proteineDonut, fiberlessDonut } from "./conjure1.js";
import { donutsAndCalories, donutsAndCarbohydrates, donutCalorieAverage, saturatedFatTotal, vitamineAverage } from "./conjure2.js";
import { donutsButters, donutsToppings } from "./conjure3.js";
import { howManyDonutWeCanBuy } from "./conjure4.js";
import {transFatModify, carbohydrateModify, fusionAddNitricine, modifyAllCarbohydratesDailyValue, addAlergen} from "./conjure5.js"

const getDonuts = async() => {
    return fetch ('https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json')
    .then(response => response.json())
}



const fetchDonuts = async() => {
    try{
        const result = await getDonuts();
        const Donuts = JSON.parse(JSON.stringify(result.items.item))
        const filteredDonuts = Object.values(Donuts);

        console.log("-------------Conjuro 1--------------")
        sugarDonut(filteredDonuts);
        ironDonut(filteredDonuts);
        proteineDonut(filteredDonuts);
        fiberlessDonut(filteredDonuts);
        console.log("-------------------------------------")
        console.log("-------------Conjuro 2--------------")
        donutsAndCalories(filteredDonuts);
        donutsAndCarbohydrates(filteredDonuts);
        donutCalorieAverage(filteredDonuts);
        saturatedFatTotal(filteredDonuts);
        vitamineAverage(filteredDonuts);
        console.log("-------------------------------------")
        console.log("-------------Conjuro 3--------------")
        donutsButters(filteredDonuts); 
        donutsToppings(filteredDonuts);
        console.log("-------------------------------------")
        console.log("-------------Conjuro 4--------------");
        howManyDonutWeCanBuy(filteredDonuts, 4);                //Change number to change the amount of silver coins
        console.log("-------------------------------------")
        console.log("-------------Conjuro 5--------------");
        transFatModify(filteredDonuts);
        carbohydrateModify(filteredDonuts);
        fusionAddNitricine(filteredDonuts);
        modifyAllCarbohydratesDailyValue(filteredDonuts);
        addAlergen(filteredDonuts);
        console.log("-------------------------------------")
    }
    catch(error){ 
        console.log(error.message)
    }
}

export default fetchDonuts




