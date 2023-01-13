import mobile from '../../image/mobile.png';
class subJumbotron extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML=`
        <style>
        .container-subJumbotron{
            background-color: #393E46;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        
        }
        
        .image-subJumbotron{
            flex-grow: 0.5;
        }
        
        .deskripsi-subJumbotron{
            font-family: 'arial black';
            color: white;
            width:400px;
            font-size: 25px;
            margin-top: 30px;
        }
        
        @media screen and  (max-width:500px){
            .image-subJumbotron img{
                width: 300px;
                margin-bottom: 0;
                padding: 0;
                height: 300px;
            }
            .deskripsi-subJumbotron{
                margin-top: 0px;
                padding-top: 0px;
                width: 300px;
            }
        }
        @media screen and  (max-width:500px){
            .image-subJumbotron img{
                width: 250px;
                margin-bottom: 0;
                padding: 0;
                height: 250px;
            }
            .deskripsi-subJumbotron{
                margin-top: 0px;
                padding-top: 0px;
                width: 250px;
            }
        }
        

#loading {
    width: 5rem;
    height: 5rem;
    border: 10px solid #f3f3f3;
    border-top: 6px solid black;
    border-radius: 100%;
    margin: auto;
    display: none;
    animation: spin 1s infinite linear;
}
#loading.display {
   display: block;
   position :absolute;
   top:800px;
}
@media screen and(max-width:800px) {
    #loading.display{
        top:100px;
    }
}
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
        </style>        
        <div class="container-subJumbotron">
            <div class="image-subJumbotron">
                <img src="${mobile}"></img>
            </div>
                <div class="deskripsi-subJumbotron">
               <h3> Kamu dapat menemukan investasi coin kamu disini !</h3>
               <search-bar>
               </search-bar>
                </div>
                <div id="loading"></div>
        </div>`
        
    }
    
}
customElements.define('sub-jumbotron',subJumbotron);