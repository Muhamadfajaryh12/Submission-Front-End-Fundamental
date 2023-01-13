
import './listCoin.js';
class tableCoin extends HTMLElement {
    set data(data) {
        this._data = data;
        this.render();
      }
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    render(){
        this.shadowDOM.innerHTML = `
        <style>
        .content-coin{
          background-color: #222831;
        }
        .flex{
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #list-data{
          background-color:black;
          margin-top:20px;
          margin-bottom:20px;
        }
        .title{
          color:white;
          font-family:'arial black';
          text-align:center;
          font-size:20px;
          padding:10px;
        }
        </style>
        <div class ="content-coin">
        <div class="title">
        <span > Daftar Tabel Koin Top 30 </span>
        </div>
        <div class="flex">
        <div id="list-data"></div>
        </div>
        </div>`

            const getCoin = this.shadowDOM.querySelector('#list-data');
            this._data.forEach(data=>{
                const item = document.createElement('list-coin');
                item.data=data;
                getCoin.appendChild(item);
            });
      }
      
    
    
    renderError(message) {
        this.shadowDOM.innerHTML = `
          <style>
            .placeholder {
              font-weight: lighter;
              color: rgba(0,0,0,0.5);
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
          </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
      }

}
customElements.define('data-table',tableCoin)