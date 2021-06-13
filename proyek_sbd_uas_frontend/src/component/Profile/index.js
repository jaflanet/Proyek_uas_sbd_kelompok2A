import React from 'react'
import gambar_profil from "../../assets/ProfileAsset/profil_profil.png"
import player from "../../assets/ProfileAsset/profile-.png"


import "./index.css"
import axios from 'axios';

const Profile= () => {
    return (
        <div className="con-profil">
        <div className="warnaprofil">
        <div className="background-profil">
               
                <div className="container-profil">
                    
                        <div className="gambar-profil">
                            <img src={gambar_profil} className="profilp"/> 
                            </div>
                    
                            <div className="tulisanprofil">
                            
                             <label for="fname">Username :</label>
                                <br></br>
                                <br></br>
                                <label for="lname">Age :</label>
                                <br></br>
                                <br></br>
                                <label for="email">Gender :</label>
                                <br></br>
                                <br></br>
                                <label for="regi">Region :</label>

                            </div>  
                            <div className="tulisan2">
                                <label for="myprofile">My Profile</label>
                                
                            </div>     
                                               
                                      
                </div>
               <div className="container-profil">
                   
                       <div className="recentprofil">
                           <img src={player} className="columnprofil"/>
                       </div>
                   </div>
                   
               
        
            </div>
        </div>

                          
        </div>
    )
}

export default Profile
