// import axios from "axios";
import companies from "./csvjson";
/**
 * @param {String} word
 */
async function search(word) {
  let searchWord = String(word)
    .toLowerCase()
    .trim();
  let total = 0;
  let list = companies.data.filter(obj => {
    let name = String(obj.Name)
      .toLowerCase()
      .trim();
    if (total <= 15 && name.includes(searchWord)) {
      total = total + 1;
      return true;
    } else {
      return false;
    }
  });
  return list;
}

// async function apiCall(word) {
//   let options = await axios.get(
//     `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${word}&apikey=E8H54HGERGT8CZ5B`
//   );
//   let matches = options.data['"bestMatches"'];
//   return matches;
// }

export default search;
