import React from 'react'
import omar from '../../assets/AboutUsAsset/omar.png'
import jon from '../../assets/AboutUsAsset/jon.png'
import adi from '../../assets/AboutUsAsset/adi.png'
import aidan from '../../assets/AboutUsAsset/aidan.png'
import karen from '../../assets/AboutUsAsset/karen.png'
import logoig from '../../assets/AboutUsAsset/insta.png'
import './index.css'

const AboutUs = () => {
    return (
        <>
  <div className="About-us-bg">
  <div className="gradient-about-us-bg">
            <div><h1 className="header-aboutus">about us</h1></div>

            <div className="row-about1"> 
            <div className="row-text-aboutus2">
              <h2 className="header-aboutus"> What are We? <hr className="garis-about" /></h2>
              
            </div> 
            <div className="row-text-aboutus">  
                <p> A group of 5 student
                    <br/>who forced to make 5 project, 
                    <br/>one of them is  a website 
                    <br/>that should be finish 
                    <br/>in 2 weeks
                    <br/> along with real 
                    <br/>database system
                    <br/> and learn bunch of 
                    <br/>new programming language</p>
            </div>
            <div className="row-text-aboutus3">
            Contact Us :
            <br />muhammadjendral12@gmail.com
            <br />085157477606
            <hr className="garis-about" />
            </div>
            </div>

  <div  className="row-about2">

    <div className="colfoto-1">

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={jon} alt="Avatar" className="gambar-profil" />
          </div>
          <div class="flip-card-back">
              <div><h2>Jonathan  <br/>“RLoo” <br/>Faren</h2></div>  
              <div>
                <a href="https://www.instagram.com/jonathanarelius/">
                <img src={logoig} alt="logoig" className="gambar-ig" /> @jonathanarelius</a></div>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={karen} alt="Avatar" className="gambar-profil" />
          </div>
        <div class="flip-card-back">
            <div><h2>Karen  <br/>“Circle_K”  <br/>Kamila </h2></div>  
            <div><a href="https://www.instagram.com/kareninakamila/">
              <img src={logoig} alt="logoig" className="gambar-ig" />  @kareninakamila</a></div>
        </div>
      </div>
    </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={aidan} alt="Avatar" className="gambar-profil" />
          </div>
          <div class="flip-card-back">
            <div><h2>Aidan  <br/>“Razon”  <br/>Daffa</h2></div>  
            <div><a href="https://www.instagram.com/aidan_daffa/">
              <img src={logoig} alt="logoig" className="gambar-ig" /> @aidan_daffa</a></div>
          </div>
        </div>
      </div>


      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={omar} alt="Avatar" className="gambar-profil" />
          </div>
        <div class="flip-card-back">
            <div><h2>Omar  <br/>"Faceman"  <br/>Mocthar</h2></div>  
            <div><a href="https://www.instagram.com/omarmoch13/">
              <img src={logoig} alt="logoig" className="gambar-ig" /> @omarmoch13</a></div>
        </div>
      </div>
    </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={adi} alt="Avatar" className="gambar-profil" />
          </div>
          <div class="flip-card-back">
            <div><h2>Satriyo  <br/>“TicklingTom” <br/> Adipratomo</h2></div>  
            <div><a href="https://www.instagram.com/adipratom/">
              <img src={logoig} alt="logoig" className="gambar-ig" /> @kimlungwei</a></div>
          </div>
        </div>
      </div>

    </div>


  </div>
    </div>
  </div>
        </>
    )
}

export default AboutUs
