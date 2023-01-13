class cardCoin extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      .coin-info{
        width:500px;
        display:flex;
        border:1px solid black;
        margin:5px;
        background:black;
        color:white;
        align-items:center;
      }
      .coin-info:hover{
        background-color: #222831;
      }
      .coin-rank{
        width:50px;
        margin-top:0px;
        background-color:white;
        text-align:center;
        border-bottom-right-radius: 25px;
        border-bottom-left-radius: 25px;
        margin-left:5px;
        background-color: #9c41f2;
      }
      img{
        margin-left:15px;
        margin-right:15px;
        width:50px;
        height:50px;
      }
      .symbol-coin{
        color:gray;
        font-size:15px;
        margin-left:5px;
      }
      @media screen and (max-width:500px){
        .coin-info{
          width:300px;
        }
        .coin-name{
          font-size:15px;
        }
        img{
          margin-left:10px;
          margin-right:10px;
          width:40px;
          height:40px;
        }
      }
      @media screen and (max-width:400px){
        .coin-info{
          width:250px;
        }
        img{
          margin-left:8px;
          margin-right:8px;
          width:35px;
          height:35px;
        }
      }
      </style>
      <div class="coin-info">

      <div class="coin-rank">
      <span>Rank</span>
      <h3>${this._data.market_cap_rank}</h3></div>

      <img class="coin-image" src="${this._data.large}">
        <h3 class="coin-name">${this._data.name}<span class="symbol-coin">(${this._data.symbol})</span></h3>
      </div>
    `;
  }
}

customElements.define('card-coin', cardCoin);