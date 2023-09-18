const fetch = require('node-fetch');


const getDonuts = async() => {
    return fetch ('https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json')
    .then(response => response.json())
}



const fetchDonuts = async() => {
    try{
        const result = await getDonuts();
        const Donuts = JSON.parse(JSON.stringify(result.items.item))
        const filteredDonuts = Object.values(Donuts)
        console.log(parseInt(filteredDonuts[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars));
        // const maxSugarDonut = filteredDonuts.reduce((parseInt(nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars)))
        // console.log(maxSugarDonut);
    }
    catch(error){ 
        console.log(error.message)
    }
}

fetchDonuts();