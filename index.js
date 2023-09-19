// const fetch = require('node-fetch');
import fetch from 'cross-fetch';
import { sugarDonut, ironDonut, proteineDonut, fiberlessDonut, donutsAndCalories, donutsAndCarbohydrates, donutCalorieAverage,saturatedFatTotal, vitamineAverage, donutsButters, donutsToppings, howManyDonutWeCanBuy, transFatModify, carbohydrateModify, modifyAllCarbohydratesDailyValue } from './service.js';


const getDonuts = async() => {
    return fetch ('https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json')
    .then(response => response.json())
}



const fetchDonuts = async() => {
    try{
        const result = await getDonuts();
        const Donuts = JSON.parse(JSON.stringify(result.items.item))
        const filteredDonuts = Object.values(Donuts)

        console.log("-------------Conjuro 1--------------")
        sugarDonut(filteredDonuts);
        ironDonut(filteredDonuts);
        proteineDonut(filteredDonuts);
        fiberlessDonut(filteredDonuts);
        donutsAndCalories(filteredDonuts);
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
        howManyDonutWeCanBuy(filteredDonuts, 4);
        console.log("-------------------------------------")
        console.log("-------------Conjuro 5--------------");
        transFatModify(filteredDonuts);
        carbohydrateModify(filteredDonuts);
        // fusionAddNitricine(filteredDonuts);
        modifyAllCarbohydratesDailyValue(filteredDonuts);
        console.log("-------------------------------------")

    }
    catch(error){ 
        console.log(error.message)
    }
}

fetchDonuts();