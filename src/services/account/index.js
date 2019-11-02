import saveService from "../../services/local-storage";

function buyStock(units, price, symbol) {
  let stocksOwned = {};
  stocksOwned = saveService.get("stocksOwned");
  let stock = stocksOwned[symbol];
  if (stock == undefined) {
    stocksOwned[symbol] = {
      units: units
    };
  } else {
    stocksOwned[symbol].units += units;
  }
  saveService.set("stocksOwned", stocksOwned);
}
function sellStock(units, price, symbol) {
  let stocksOwned = {};
  stocksOwned = saveService.get("stocksOwned");
  let stock = stocksOwned[symbol];
  if (stock == undefined) {
    stocksOwned[symbol] = {
      units: units
    };
  } else {
    stocksOwned[symbol].units -= units;
  }
  saveService.set("stocksOwned", stocksOwned);
}
function getStocks(symbol = "") {
  let stocksOwned = {};
  stocksOwned = saveService.get("stocksOwned");
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

function get() {
  return saveService.get("stocksOwned");
}

export default { buyStock, sellStock, getStocks, get };
