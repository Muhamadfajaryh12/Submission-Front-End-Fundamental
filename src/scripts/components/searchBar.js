class SearchBar extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
  
  
    get value() {
      return this.shadowDOM.querySelector('#searchElement').value;
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
        :host {
          display: block;
        }
        .search-container{
          display:flex;
          margin-top:20px;
          margin-bottom:20px;
        }
        #searchElement{
          height:30px;
          margin:0;
          padding:0;
         }
         #searchButtonElement{
          margin:0;
          height:30px;
          padding:0;
          background-color: #FFD369;
          border:none;
          padding:5px;
          font-weight:bold;
         }
         #searchButtonElement:hover{
          cursor:pointer;
         }
          @media screen and (max-width: 550px) {
            .search-container {
              flex-direction: column;
              position: static;
            }
            .search-container > input {
              width: 100%;  
              margin-bottom: 12px;
            }
            .search-container > button {
              width: 100%;
            }
          }
        </style>
        
        <div id="search-container" class="search-container">
          <input placeholder="Search Coins" id="searchElement" type="search">
          <button id="searchButtonElement" type="submit">Search</button>
        </div>
      `;
  
      this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
  }
  
  customElements.define('search-bar', SearchBar);
  