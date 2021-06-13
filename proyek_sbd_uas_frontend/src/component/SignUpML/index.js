import React, {useState, useEffect} from 'react'
import './index.css'
import Select from 'react-select'
import axios from 'axios';

const rankML_options = [
        { value: 'Warrior', label: 'Warrior'},
        { value: 'Elite', label: 'Elite'},
        { value: 'Master', label: 'Master'},
        { value: 'Grandmaster', label: 'Grandmaster'},
        { value: 'Epic', label: 'Epic'},
        { value: 'Legend', label: 'Legend'},
        { value: 'Mythic', label: 'Mythic'},
        { value: 'Mythical Glory', label: 'Mythical Glory'}
  
]

const roleML_options = [
    { value: 'Assasin', label: 'Assasin'},
    { value: 'Fighter', label: 'Fighter'},
    { value: 'Mage', label: 'Mage'},
    { value: 'Marksman', label: 'Marksman'},
    { value: 'Initiator', label: 'Initiator'},
    { value: 'Tank', label: 'Tank'}
]

const customStyles = {
    container: provided => ({
      ...provided,
      width: 430,
      color: 'black'
    })
  };

const SignUpML = () => {
    const [id, setId] = useState()
    const [usernameml, setUsernameml] = useState()
    const [role, setRole] = useState()
    const [rank, setRank] = useState()
    const [usernameweb, setUsernameweb] = useState()

        const getRequest = async () => {
            await axios.post("https://backend-findmates.herokuapp.com/ML/", 
              {
                id : id,
                usernameml : usernameml,
                role : role,
                rank : rank,
                usernameweb : usernameweb

              }
              ).then(
                //   console.log(res),
                  alert('Data ML berhasil disimpan')
              )
              }

    return (
        <>
            <div className="modalBox">
                <h1>Mobile Legends</h1>
                <form method="post">
                    <div className="txt_field_signidML">
                        <label className="idlabelML">ID</label>
                        <input type="text" required onChange={(e) => setId(e.target.value)}/>
                    </div>
                    <div className="txt_field_usernameML">
                        <label className="usernameingamelabelML">Username InGame</label>
                        <input type="text" required onChange={(e) => setUsernameml(e.target.value)}/>
                    </div>
                    <div className="txt_field_signML">
                        <label>RANK</label>
                        <Select 
                        options={rankML_options}
                        styles={customStyles}
                        isSearchable={true}
                        onChange={(event) => setRank(event.value)}
                        />
                    </div>
                    <div className="txt_field_signML">
                        <label>ROLE</label> 
                            <Select 
                        options={roleML_options}
                        styles={customStyles}
                        isSearchable={true}
                        onChange={(event) => setRole(event.value)}
                        />
                    </div>
                    <div className="txt_field_signusernameML">
                        <label className="usernamelabelML">USERNAME</label> 
                        <input type="text" required onChange={(e) => setUsernameweb(e.target.value)}/>
                    </div>
                    <div className="submitButton_signML">
                        <button type="button" onClick={() => getRequest()}>
                            <img src="https://i.ibb.co/M8bpJzM/Component-2.png" alt="submit" />  
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUpML