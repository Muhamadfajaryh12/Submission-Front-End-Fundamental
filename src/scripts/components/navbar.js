import logo from '../../image/logo.png'
class Navbar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowDOM.innerHTML =`
        <style>
        .navbar{
            background-color: #222831;
            color: white;
            position: fixed;
            width: 100%;
            z-index: 10;
            height:100px;
        }
        ul{
            text-decoration: none;
            display: flex;
            list-style: none;
            align-items: center;
        }
        ul li a{
            text-decoration: none;
            color: #FFD369;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
        .logo h3{
            font-family: 'arial black';
            margin-left: 5px;
        }
        .logo{
            display: flex;
            align-items: center;
            flex-grow: 0.9;
        }
        .logo img{
            width: 50px;
            margin-left: 5px;
        }
        #toogle{
            margin-left: 50px;
        }
        .link{
            position: fixed;
            top: 100px;
            text-align: center;
            background-color: black;
            width: 100%;
        }
        .hide {
            display: none;
        }   
        #toogle{
            display: block;
            cursor: pointer;
            width: 50px;
        }
        .link li{
            padding: 15px;

        }
        .link li:hover{
            background-color: gray;
            font-weight: bold;
        }
        @media screen and (min-width:600px){
            .link{
                text-decoration: none;
                display: flex;
                position: relative;
                top: 0;
                left: 0;
                width: auto;
                list-style: none;
                align-items: center;
                flex-direction: row;
                flex-grow:0.5;
                background: none;
            }
            .link li{
                border:none;
            }
            #toogle{
                display: none;
            }
            .logo{
                flex-grow: 0.4;
            }
        }
        .hamburger-lines .line {
            display: block;
            height: 5px;
            width:20px;
            border-radius: 10px;
            background: white;
            margin:2px;
          }
        </style>
        <div class="navbar">
            <ul>
                <div class="logo">
                    <li> <img src="${logo}"></li>
                    <h3> Crypto Market </h3>
                </div>
                <div class="link hide">
                <li> <a href="#">Home</a> </li>
                <li> <a href="#list-data">List Coin</a></li>
                </div>
                <div id="toogle">
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>  
                </div>
            </ul>
        </div>
        `;
        const toggleBar =  this.shadowDOM.getElementById('toogle');
        const active =   this.shadowDOM.querySelector('.link');
        toggleBar.addEventListener('click',()=>{
            active.classList.toggle('hide');
        });
    }

}
customElements.define('nav-bar',Navbar);