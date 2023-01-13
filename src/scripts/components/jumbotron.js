import CryptoUI from '../../image/Crypto.png';
class Jumbotron extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowDOM.innerHTML=`
        <style>
        .jumbotron{
            background-color: #222831;
            display: flex;
            height: 600px;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        
        }
        .jumbotron-deskripsi{
            width: 300px;
            color: white;
            margin-top: 200px;
            font-family: 'arial black';
            font-size: larger;
        }
        .jumbotron-image img{
            height: 600px;
        }
        .button-started{
            border: 3px solid #FFD369;
            background-color: transparent;
            color: white;
            border-radius: 2px;
            width: 200px;
            margin-top: 10px;
            padding: 3px;
        }
        .button-started:hover{
            background-color: #FFD369;
        }
        .jumbotron-container{
            flex-grow: 0.5;
        }
        @media screen and (max-width:980px){
            .jumbotron-image img{
                width: 500px;
                margin-bottom: 0;
                padding: 0;
            }
            .jumbotron-deskripsi{
                margin-top:100px;
            }
            .jumbotron{
                height: 100%;
            }
            .jumbotron-container{
                flex-grow: 0;
            }
        }
        @media screen and (max-width:500px){
            .jumbotron-image img{
                width: 300px;
                margin-bottom: 0;
                padding: 0;
                height: 300px;
            }
            .jumbotron-deskripsi{
                margin-top:10px;
            }
        }
        @media screen and (max-width:500px){
            .jumbotron-image img{
                width: 250px;
                margin-bottom: 0;
                padding: 0;
                height: 250px;
            }
            .jumbotron-container,.jumbotron-deskripsi{
                width:250px;
                font-size:15px;
                margin-top:50px;
            }
        }
        </style>
        <div class="jumbotron">
            <div class="jumbotron-container">
            <div class="jumbotron-deskripsi">
                <h1>Memulai Portofolio Crypto Kamu Disini </h1>
            <div class="started">
                <a href="#list-data"><button class="button-started"> <h3>Get Started</h3> </button></a>
            </div>
            </div>
            </div>
            <div class="jumbotron-image">
            <img src="${CryptoUI}"></img>
            </div>
        </div>
        `;
    }
}
customElements.define('jumbotron-content',Jumbotron);