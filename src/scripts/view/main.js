import '../components/navbar.js';
import '../components/jumbotron.js';
import '../components/subJumbotron.js';
import '../components/listCoin.js';
import '../components/footer.js';
import '../components/searchBar.js';
import '../components/cardCoin.js';
import '../components/tableCoin.js';
import '../components/cardBody.js'
import axios from 'axios';
import DataSource from '../data/DataSource.js';

const main = () =>{
  const listElement     = document.querySelector("data-table");
  const searchElement   = document.querySelector('search-bar');
  const card            = document.querySelector('card-body');
  const loader          = document.querySelector("#loading");
  const displayLoading = () => {
    loader.classList.add("display");
    
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
}
  const hideLoading = () => {
    loader.classList.remove("display");
  }
    const getData = async () => {
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false`)
        console.log(res.data)
          if (res.data.error) {
            showResponseMessage(res.data.message);
          } 
          else {
            renderAllCoins(res.data);
          }
    } 
    catch (error) {
    showResponseMessage(error);
    }
  };
  const onButtonSearchClicked = async () => {
    try {
      displayLoading()
      const result = await DataSource.getSearch(searchElement.value);
      renderResult(result);
      hideLoading()
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
   card.datas = results;
  };

  const fallbackResult = message => {
    card.renderError(message);
  };

searchElement.clickEvent = onButtonSearchClicked;

     const renderAllCoins = results => {
     listElement.data = results;
   };
    const showResponseMessage = (message = 'Check your internet connection') => {
      alert(message);
    };
   
 document.addEventListener('DOMContentLoaded', () => {
      getData();
    });
}
export default main;