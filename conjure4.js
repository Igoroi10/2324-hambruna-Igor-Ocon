
const howManyDonutWeCanBuy =  (filteredDonuts, num) =>{
    filteredDonuts.forEach(el => {
        console.log("Podemos comprar una cantidad de " + parseInt(num/el.ppu) + " donuts tipo " + el.name + " y sobrando " + parseFloat(num%el.ppu).toFixed(2) + " monedas")
    })
    console.log("------------------------------")
    console.log("------------------------------")
}
export {

    howManyDonutWeCanBuy,
}