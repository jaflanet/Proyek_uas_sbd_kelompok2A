import React, {useState, useEffect} from 'react'
import './index.css'
import Select from 'react-select'
import axios from 'axios';

const rankPUBG_options = [
    { value: 'Conqueror', label: 'Conqueror'},
    { value: 'Ace', label: 'Ace'},
    { value: 'Crown', label: 'Crown'},
    { value: 'Diamond', label: 'Diamond'},
    { value: 'Platinum', label: 'Platinum'},
    { value: 'Gold', label: 'Gold'}, 
    { value: 'Silver', label: 'Silver'}, 
    { value: 'Bronze', label: 'Bronze'}
]

const rolePUBG_options = [
    { value: 'Rusher', label: 'Rusher'},
    { value: 'Scout', label: 'Scout'},
    { value: 'Initiator', label: 'Initiator'},
    { value: 'Support', label: 'Support'},
    { value: 'Sniper', label: 'Sniper'}
]

const customStyles = {
    container: provided => ({
      ...provided,
      width: 430,
      color: 'black'
    })
  };

const SignUpPUBG = () => {
    const [usernamepubg, setUsernamepubg] = useState()
    const [role, setRole] = useState()
    const [rank, setRank] = useState()
    const [usernameweb, setUsernameweb] = useState()

        const getRequest = async () => {
            await axios.post("https://backend-findmates.herokuapp.com/PUBG/", 
              {
                usernamepubg : usernamepubg,
                role : role,
                rank : rank,
                usernameweb : usernameweb

              }
              ).then(
                //   console.log(res),
                  alert('Data PUBG berhasil disimpan')
              )
              }

    return (
        <>
            <div className="modalBox">
                <h1>PUBG</h1>
                <form method="post">
                <div className="txt_field_signidtagPUBG">
                        <label className="usernamelabelPUBG2">USERNAME PUBG</label> 
                        <input type="text" required onChange={(e) => setUsernamepubg(e.target.value)}/>
                    </div>
                    <div className="txt_field_signPUBG">
                        <label>RANK</label>
                        <Select 
                        options={rankPUBG_options}
                        styles={customStyles}
                        isSearchable={true}
                        onChange={(event) => setRank(event.value)}
                        />
                    </div>
                    <div className="txt_field_signPUBG">
                        <label>ROLE</label> 
                            <Select 
                        options={rolePUBG_options}
                        styles={customStyles}
                        isSearchable={true}
                        onChange={(event) => setRole(event.value)}
                        />
                    </div>
                    <div className="txt_field_signusername">
                        <label className="usernamelabelPUBG">USERNAME</label> 
                        <input type="text" required onChange={(e) => setUsernameweb(e.target.value)}/>
                    </div>
                    <div className="submitButton_signPUBG">
                        <button type="button" onClick={() => getRequest()}>
                            <img src="https://i.ibb.co/M8bpJzM/Component-2.png" alt="submit" />  
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUpPUBG