class listCoin extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  } 
    set data(data){
        this._data=data;
        this.render();
    }
    render(){
        
      var list="";

        list +=`   <style>
        .coin-main:hover{
            background-color:grey;
        }
        .coin-main{
            display:flex;
            border-radius:50px;
            margin:10px;
            color:white;
        }
        .image-coin{
            width:50px;
            margin-top:20px;
        }
        .rank-coin,.name-coin,.price-coin,.market-coin,.volume-coin,.percen-red,.percen-green{
            margin:15px 15px 0px 15px;
        }
        .name-coin,.price-coin,.market-coin,.volume-coin,symbol-coin{
            width:150px;
        }
        .percen-red{
            color: rgb(240, 35, 35);
            text-align: center;
            font-family: 'arial black';
        }
        .percen-green{
            color: rgb(42, 192, 22);
            text-align: center;
            font-family: 'arial black';
        } 
        .symbol-coin,.label-price,.label-market,.label-volume{
            color:#D8D8D8;
        }
        .segitiga-down{
            border-top:solid 12px red;
            border-left:solid 8px transparent;
            border-right:solid 8px transparent;
            margin-right: 10px;
        }
        .segitiga-up{
            border-bottom:solid 12px rgb(42, 192, 22); ;
            border-left:solid 8px transparent;
            border-right:solid 8px transparent;
            margin-right: 10px;
        }
        .flex{
            display:flex;
            align-items:center;
        }
        @media screen and (max-width:980px){
            .name-coin,.price-coin,.market-coin,.volume-coin,symbol-coin{
                width:100px;
            }
        }
        @media screen and (max-width:770px){
            .name-coin,.price-coin,.market-coin,.volume-coin,symbol-coin,.percen-green,.percen-red{
                font-size:15px;
                width:200px;
                display:flex;
                align-items:center;
            }
            .image{
                text-align:center;
            }
            .symbol-coin,.label-price,.label-market,.label-volume,.label-24h{
                margin-left:10px;
            }
            .coin-main{
                display:block;
                width:350px;
                margin-bottom:10px;
                border:1px solid white;
                border-radius:0;
            }
        }
        @media screen and (max-width:500px){
            .name-coin,.price-coin,.market-coin,.volume-coin,symbol-coin,.percen-green,.percen-red{
                width:200px;
                font-size:10px;
            }
            .coin-main{
                width:250px;
            }
        }
        @media screen and (max-width:400px){
            .name-coin,.price-coin,.market-coin,.volume-coin,symbol-coin,.percen-green,.percen-red{
                width:200px;
                font-size:10px;
            }
            .coin-main{
                width:200px;
            }
        }
        </style>`  
      list += `
        <div class="coin-main" id="${this._data.id}">
         <div class="rank-coin" data-label="#"><h3>${this._data.market_cap_rank}</h3></div>
         <div class="image"><img class="image-coin"src=${this._data.image} alt=''></div>
         <div class="name-coin" data-label="Name Coin"><h4> ${this._data.name}</h4><span class="symbol-coin">(${this._data.symbol.toUpperCase()})</span></div>
         <div class="price-coin" data-label="Price"><h4>$ ${this._data.current_price.toString().replace(/\./g,',')}</h4><span class="label-price">Price</span> </div>
         <div class="market-coin" data-label="Market Cap"><h4>$  ${this._data.market_cap}</h4><span class="label-market">Market Cap</span> </div>
         <div class="volume-coin" data-label="Volume"><h4>$  ${this._data.total_volume}</h4><span class="label-volume">Volume</span> </div>`
        if(0 > parseInt(this._data.price_change_24h) ){
          list += `<div class="percen-red" data-label="24 Hr"><div class="flex"><span class="segitiga-down" aria-hidden="true"></span><h4> ${this._data.price_change_percentage_24h.toString().slice(0,4).replace(/\-/g,'')}%</h4></div> <span class="label-24h">24h</span></div>`;
        }
        else{
          list += `<div class="percen-green" data-label="24 Hr"><div class="flex"><span class="segitiga-up" aria-hidden="true"></span><h4> ${this._data.price_change_percentage_24h.toString().slice(0,4).replace(/\-/g,'')}%</h4></div><span class="label-24h">24h</span> </div>`;
        }
        list += `</div>`;
      
      this.shadowDOM.innerHTML=list;
    };

}
customElements.define('list-coin',listCoin);