import logo from '../../image/logo.png';
import facebook from '../../image/logo2.png';
import email from '../../image/logo1.png';
import twitter from '../../image/logo3.png';
class Footer extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    render(){
        this.shadowDOM.innerHTML=`
        <style>
        footer{
            background-color: #393E46;
        }
        .container-footer{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .container-footer .item-footer{
            display: inline;
            margin: 10px;
        }
        .products,.company,.social-media{
            flex-grow: 0.1;
            margin-top: 20px;
            color: #DEDEDE;
        }
        .products h3 ,.company h3,.social-media h3{
            font-family: 'arial black';
            font-size: 30px;
        }
        .container-footer .item-footer li{
            margin-top: 10px;
        }
        .item-footer{
            font-weight: 800;
            font-size: large;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        .item-footer li:hover{
            cursor: pointer;
            color: white;
        }
        .name-footer{
            flex-grow: 1;
            margin-top: 30px;
            margin-left: 15px;
        }
        .name-item-footer img{
            width: 100px;
        }
        .name-item-footer h2{
            color: white;
            font-size: 30px;
            font-family: 'arial black';
        }
        .social-media{
            text-align:center;
        }
        .social-media .item-footer {
            display: flex;
            flex-wrap: wrap;
        }
        .social-media .item-footer li{
            margin: 10px;
        }
        ul li{
            list-style:none;
        }
        ul li img{
            width:60px;
        }
        </style>
        <footer>
        <div class="container-footer">
            <div class="name-footer">
            <ul class="name-item-footer">
            <li> <img src="${logo}"></li>
            <h2> Crypto Market </h2>
            <ul>
            </div>
            <div class="products">
            <h3> Products </h3>
                <ul class="item-footer">
                    <li> Blockchain Explorer </li>
                    <li> Our API </li>
                    <li> Rate Comparison </li>
                </ul>
            </div>
            <div class="company">
                <h3> Company </h3>
                <ul class="item-footer">
                    <li> Privacy Policy</li>
                    <li> About Us</li>
                    <li> Terms of Service</li>
                    <li> Contact Support</li>
                </ul>
            </div>
            <div class="social-media">
                <h3> Social Media </h3>
                <ul class="item-footer">
                    <li><img src="${facebook}"></li>
                    <li> <img src="${email}"></li>
                    <li><img src="${twitter}"></li>
                </ul>
            </div>
        </div>
        </footer>`
    }
}
customElements.define('footer-hero',Footer);