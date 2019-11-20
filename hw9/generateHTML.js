const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  yellow: {
    wrapperBackground: "#FBE030",
    headerBackground: "#FFFF00",
    headerColor: "white",
    photoBorderColor: "#FFFF1a"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};



function generateHTML(data) {
    console.log(data)
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans&display=swap" rel="stylesheet">
    
        
        <style>
                #topCard{
                margin-right: 100px;
                margin-left: 30px;
                margin-top: 45px;
                border-radius: 15px;
                position: relative;
                background-color:  ${colors[data.color].headerBackground};
                max-width: 960px;
                margin: auto;
                }
    
                img{
                
                    vertical-align:super;
                    margin-left: 430px;
                    width: 100px;
                    height: auto;
                }
    
                h1{
                    text-align: center;
                    font-family: 'Merriweather Sans', sans-serif;
                }
    
                h2{
                    text-align: center;
                    font-family: 'Merriweather Sans', sans-serif;
                }
                
                h3{
                    text-align:center;
                    font-family: 'Merriweather Sans', sans-serif;
                    margin-top: 10px;
                }
                
                h4{
                    font-size: 30px;
                    font-family: 'Merriweather Sans', sans-serif;
                }
    
                body{
                    background-color:${colors[data.color].wrapperBackground};
                }
    
                
                #contact{
                    text-align: center;
                    padding:10px;
                }
    
                .infoCards{
                    margin: auto 0;
                    text-align: center;
                    position:relative;
                    background:white;
                    width: 100%;
                }
    
                #publicRepo{
                    width:50%;
                    padding:30px;
                    position:relative;
                }
    
                #followers{
                    width:50%;
                    padding:30px;
                    position:relative;
                }
    
                #stars{
                    width:50%;
                    padding:30px;
                    position:relative;
                }
    
                #following{
                    width:50%;
                    padding:30px;
                    position:relative;
                }
                .float{
                    float: left;
                    padding: 20px;
                }
        </style>
    
    
        <title></title>
    </head>
    
    <body>
    
    <div id="topCard">
            <img id="frontpageimage" src="${data.response.avatar_url}"/>
            <div id="topCardText">
            <h1 class="display-4">Hello!</h1>
            <h2>My name is ${data.response.name}</h2>
            <h2> </h2>
    
            <nav id=contact>
            ${data.response.location ? `<a class="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/
            ${data.response.location}"><i class="fas fa-location-arrow"></i> ${data.response.location}</a>`: " "}
                <a class="github" href="${data.response.html_url}"> <i class="fab fa-github-alt"></i> GitHub</a>
                <a class="contact" href="${data.response.blog}">Contact</a>
            </nav>
            </div>
    </div>
    
    
     <!-- git hub bio  -->
     <div id="bio">
     <h3>${data.response.bio ? `${data.response.bio}` : " "} </h3>
    </div>
    
    <div class="container">
        
    <div class="infoCards">
      <div class="row">
          <div class="col-md-6">
            <!-- pubic repo -->
            <div class="float">
                <div id="publicRepo">
                    <h4>Public Repositories</h4>
                    <p>5</p>
                </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <!--  followers -->
            <div class="float">
                <div id="followers">
                    <h4>Followers</h4>
                    <p>3</p>
                </div>           
            </div>
          </div>
      </div>

      <div class="row">

        <div class="col-md-6">
            <!-- stars -->
            <div class="float">
                <div id="stars">
                <h4>GitHub Stars</h4>
                <p> None</p>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <!-- following -->
            <div class="float">
                <div id="following">
                <h4>Following</h4>
                <p>6</p>
                </div>
            </div>
        </div>

      </div>
    </div>
</div>                   
</body>

</html>`;
  }

module.exports = generateHTML;