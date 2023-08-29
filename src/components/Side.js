import React from 'react'



function Side() {
    return(
<div className="Side">
    <div className="title">
   <h1>HEY, MY NAME IS AZURE HARRIS </h1>
   <span>I am a beginning software developer, looking to further advance into a career. My dream is to become a game dev. You can view my projects below </span>
   <button className="git"><a href="https://github.com/Azuree29">View My GitHub</a></button>
   </div>
   <div className="contact">
        <form>
            <input type="text" class="input-field" placeholder="Full Name"></input><br></br>
            <input type="text" class="input-field" placeholder="Email"></input><br></br>
            <input type="number" class="input-field" placeholder="Phone Number"></input>
            <br></br>
            <textarea type="text" class="input-field" placeholder="message"></textarea>
            <button className="submit">Submit</button>
           
        </form>  
        </div>
        <div className="images">
        <img src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-4.png"></img><br></br>
        <img src="https://www.pngkit.com/png/full/1-13187_instagram-logo-new-vector-eps-free-download-logo.png"></img><br></br>
        <img src="https://cdn.freebiesupply.com/logos/large/2x/linkedin-icon-logo-png-transparent.png"></img><br></br>
        <img src="https://cdn2.iconfinder.com/data/icons/social-media-iconez/64/GitHub-1024.png"></img>
        <img src=""></img>
   </div>
</div>
    )
}

export default Side