import saveService from "../../services/local-storage";
let stocksOwned = {};
stocksOwned = saveService.get(stocksOwned);

function buyStock(units, price, symbol) {
  stocksOwned[symbol].units += units;
  let boughtUnitsAtPrice = { units: units, price: price, date: new Date.now() };
  stocksOwned[symbol].history.push(boughtUnitsAtPrice);
}
function sellStock(units, price, symbol) {
  let personOwns = stocksOwned[symbol].units;
  if (personOwns < units) {
    return "Error, not enought units";
  } else if (personOwns == units) {
    stocksOwned[symbol].units -= units;
    delete stocksOwned[symbol];
  } else {
    stocksOwned[symbol].units -= units;
  }
}
function getStocks(symbol = "") {
  if (symbol.length == 1) {
    let units = 0;
    for (const key in stocksOwned) {
      if (stocksOwned.hasOwnProperty(key)) {
        const element = stocksOwned[key];
        units += element.units;
      }
    }
    return units;
  } else {
    return stocksOwned[symbol].units;
  }
}

export default { buyStock, sellStock, getStocks };
