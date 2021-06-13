import React, {useState, useEffect} from 'react'
import tabel1 from "../../assets/HomeML/profile-.png"
import tabel2 from "../../assets/HomeML/profil_profil.png"
import "./index.css"
import Select from 'react-select'
import axios from 'axios';
const time_options = [
    { value: 'Morning', label: 'Morning'},
    { value: 'Afternoon', label: 'Afternoon'},
    { value: 'Evening', label: 'Evening'},
    { value: 'Night', label: 'Night'}
]

const rank_option = [
    { value: 'Iron', label: 'Iron'},
    { value: 'Bronze', label: 'Bronze'},
    { value: 'Silver', label: 'Silver'},
    { value: 'Gold', label: 'Gold'},
    { value: 'Platinum', label: 'Platinum'},
    { value: 'Diamond', label: 'Diamond'},
    { value: 'Immortal', label: 'Immortal'},
    { value: 'Radiant', label: 'Radiant'}
]
const customStyles = {
    container: provided => ({
      ...provided,
      width: 200,
      color: 'black'
    })
  };

const HomeValo= () => {
    let list = []
    const [loading, setLoading] = useState(true);
    const [onlinetime, setOnlinetime]= useState()
    const [rank, setRank]= useState()
    const [usernameweb, setUsernameweb] = useState()
    const [resultsss, setResultsss ] = useState();
    const [hasil1, setHasil1] = useState();
    const [hasil2, setHasil2] = useState();


    const onRankChange = (e) => {
        setResultsss(hasil1)
        setRank(e);
    }
    const onTimeChange = (e) => {
        setResultsss(hasil1)
        setOnlinetime(e)
    }
    const onUsernameWeb = (e) => {
        setResultsss(hasil1)
        setUsernameweb(e);
    }

    

    const filterButton = () => {
        setResultsss(resultsss.filter(data => data.rank === rank && data.onlinetime === onlinetime && data.usernameweb !== usernameweb))
    }

    useEffect(() => {
        let tootle = true;

        const fetchData = async () => {
            const response = await axios.get("https://backend-findmates.herokuapp.com/teamValo/")
            if(tootle){
                // console.log(response.data)
                setResultsss(response.data)
                setHasil1(response.data)
                setLoading(false)
                console.log(resultsss)
            }
        }

        fetchData();

        return() => tootle = false;
    }, [])

       
    return (
        <>
        { loading ? <>Loading...</> :
        <div className='valoMainContainer'>
          <div className='gradient-valo'>  
        <div className='valoLeftSidebarContainer'>
            <div className='col-atas-1'>
        <div className='valoListCol'> 
        <label for="Rank" ><h1 className="tulisancolvalo1">RANK</h1></label>
            <div className="radiovalo1">
                    <Select 
                    options={rank_option}
                    styles={customStyles}
                    isSearchable={true}
                    onChange={(event) => onRankChange(event.value)}
                    maxMenuHeight={100}/>
            </div>
        </div>
        <div className='valoListCol'> 
        <label for="Online"><h1 className="tulisancolvalo1">ONLINE TIME</h1></label>
            <div className="radiovalo1">
                <Select 
                options={time_options}
                styles={customStyles}
	            isSearchable={true}
	            onChange={(event) => onTimeChange(event.value)}
	            maxMenuHeight={100}/> 
            </div>
        </div>
        <div className='valoListCol'> 
        <label for="Username" ><h1 className="tulisancolvalo1">USERNAME</h1></label>
        <div className="formulirvalo1">
        <input type="form" id="formulir" name="formu" placeholder="input your web username" className="input-valo" onChange={(e) => onUsernameWeb(e.target.value)}/>                         
        </div>
        
        </div>
        </div> 
        <div className='col-atas-1'>
        <button type="button" onClick={() => filterButton()} className="button-valo">Submit</button>  
        </div>
        </div>
        
        <div className='valoMainContentContainer'>
        <div>
            <label for="teamates"><h1 className="tulisancolvalo1">Teammates For You</h1></label>
        </div>
        <div>
            <div className="col-hasiljudul"> <label className="col-dalem-tulisan"> <h4>Username</h4> </label></div>
            <div className="col-hasiljudul"> <label className="col-dalem-tulisan"> <h4>Role</h4> </label></div>
            <div className="col-hasiljudul"> <label className="col-dalem-tulisan"><h4>Rank</h4></label> </div>
            <div className="col-hasiljudul"> <label className="col-dalem-tulisan"><h5>Online Time</h5> </label></div>
            <div className="col-hasiljudul"> <label className="col-dalem-tulisan"><h4>Username</h4></label></div>
            <div className="col-hasiljudul"> <label className="col-dalem-tulisan"><h4>Role</h4></label></div>
            <div className="col-hasiljudul"> <label className="col-dalem-tulisan"><h4>Rank</h4></label> </div>
            <div className="col-hasiljudul"> <label className="col-dalem-tulisan"><h5>Online Time</h5> </label></div>
            {resultsss.map((data, index)=>{
            if (index < 5){
            return(
            <>
            <div className="col-hasil1"> <label className="col-dalem-tulisan">{data.iddantag} </label></div>
            <div className="col-hasil3"> <label className="col-dalem-tulisan">{data.role}</label> </div>
            <div className="col-hasil4"> <label className="col-dalem-tulisan">{data.rank}</label> </div>
            <div className="col-hasil2"> <label className="col-dalem-tulisan">{data.onlinetime} </label></div>
            </>
            )
                }
            })}
        </div>
        </div>
        </div>
      </div>
         }
        </>
    )
    
}

export default HomeValo;