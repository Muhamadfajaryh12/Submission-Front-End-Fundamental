import './cardCoin.js';

class cardBody extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set datas(datas) {
    this._datas = datas;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    #container-card{
      background-color: #393E46;
    }
    .title{
      color:white;
      font-family:'arial black';
      text-align:center;
      font-size:20px;
      padding:10px;
    }
    #card{
      display:flex;
      flex-wrap:wrap;
      justify-content:center;
    }
    </style>
    <div id="container-card">
    <div class="title">
    <span>Hasil pencarian yang ditemukan </span>
    </div>
    <div id = "card"></div>
    </div>`
  ;
  const card = this.shadowDOM.querySelector('#card');
    this._datas.forEach(data => {
      const clubItemElement = document.createElement('card-coin');
      clubItemElement.data = data;
      card.appendChild(clubItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
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

customElements.define('card-body', cardBody);