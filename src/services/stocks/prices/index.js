import axios from "axios";
import saveService from "../../local-storage";
/**
 * @param {String} sym
 */
const getPrices = async (sym, cache = 1000 * 60 * 60 * 24) => {
  let stock = String(sym)
    .trim()
    .toLowerCase();
  let cached = await saveService.get(stock);
  let result = null;
  if (cached == null || new Date().valueOf() - cached["date"] >= cache) {
    result = await sendRequest(stock);
    saveService.set(stock, { date: new Date().valueOf(), data: result });
  } else {
    result = cached.data;
  }
  return result;
};

async function sendRequest(stock) {
  let response = await axios.get(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&apikey=E8H54HGERGT8CZ5B`
  );
  if (response.data["Error Message"] != undefined) {
    throw new Error("Invalid");
  }
  if (response.data["Time Series (Daily)"] == undefined) {
    throw new Error("Invalid");
  }
  return response.data["Time Series (Daily)"];
}

export default getPrices;
