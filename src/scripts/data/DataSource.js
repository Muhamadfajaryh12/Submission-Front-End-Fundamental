import axios from "axios";
class DataSource {
    static getSearch(keyword) {
      return axios.get(`https://api.coingecko.com/api/v3/search?query=${keyword}`)
          .then(responseJson => {
            if (responseJson.data.coins) {
              return Promise.resolve(responseJson.data.coins);
            } else {
              return Promise.reject(`${keyword} is not found`);
            }
          });
    }
}
   
  export default DataSource;