import React, {useState, useEffect} from 'react'
import logo_fm from '../../assets/CreateAsset/create.png'
import Select from 'react-select'
import logo_Valo from '../../assets/NavbarAsset/valo_logo_white.png'
import logo_PUBG from '../../assets/NavbarAsset/pubg_logo_white.png'
import logo_ML from '../../assets/NavbarAsset/ml_logo_white.png'
import "./index.css"
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SignUpValo from '../SignUpValo'
import SignUpPubg from '../SignUpPubg'
import SignUpML from '../SignUpML'


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const region_options = [
    { value: 'North America', label: 'North America' },
    { value: 'South America', label: 'South America' },
    { value: 'Central America', label: 'Central America' },
    { value: 'Carribean', label: 'Carribean' },
    { value: 'Northeastern Asia', label: 'Northeastern Asia' },
    { value: 'Australia & Oceania', label: 'Australia & Oceania' },
    { value: 'Noerthern Europe', label: 'Noert EU' },
    { value: 'Southern Europe', label: 'South EU' },
    { value: 'Eastern Europe', label: 'East EU' },
    { value: 'Western Europe', label: 'West EU' },
    { value: 'Middle East', label: 'Middle East'},
    { value: 'Nortern Africa', label: 'Nortern Africa'},
    { value: 'Southern Africa', label:'Southern Africa'}
]

const gender_options = [
    { value: 'Male', label: 'Male'},
    { value: 'Female', label: 'Female'}
]

const time_options = [
    { value: 'Morning', label: 'Morning'},
    { value: 'Afternoon', label: 'Afternoon'},
    { value: 'Evening', label: 'Evening'},
    { value: 'Night', label: 'Night'}  
]

const customStyles = {
    container: provided => ({
      ...provided,
      width: 430,
      color: 'black'
    })
  };

  
const SignUp = () => {
    const [username, setUsername] = useState()
    const [age, setAge] = useState()
    const [region, setRegion] = useState()
    const [onlinetime, setOnlinetime] = useState()
    const [sex, setSex] = useState()

    // useEffect(() => {
        // let toggle = true;

        const getRequest = async () => {
              await axios.post("https://backend-findmates.herokuapp.com/signup/", 
              {
                username : username,
                age : age,
                region : region,
                onlinetime : onlinetime,
                gender : sex,
              }
              ).then(
                  alert('Data User berhasil disimpan'),
                //   console.log(response)

              )
            //   if(toggle){
            //     console.log(response)
            //   }
            }   
        // return () => toggle = false
    // })

    const classes = useStyles();
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
  
    const handleOpen1 = () => {
      setOpen1(true);
    };
  
    const handleClose1 = () => {
      setOpen1(false);
    };
    const handleOpen2 = () => {
        setOpen2(true);
      };
    
      const handleClose2 = () => {
        setOpen2(false);
      };
      const handleOpen3 = () => {
        setOpen3(true);
      };
    
      const handleClose3 = () => {
        setOpen3(false);
      };

    return (
        <>
        <div className="Container-signup">
        <div className="Container-signup-bg">
            <div className="Wrapper-signup">
                <div className="logo_signup">
                    <img src={logo_fm} className="logofm" alt="logo harusnye"/>
                </div>
                <div className="PENCETAN">
                    <button onClick={handleOpen1} className="button">
                        <img src={logo_Valo} alt='Valo' />
                    </button>
                    <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open1}
                            onClose={handleClose1}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                        >
                        <Fade in={open1}>
                        <div className={classes.paper}>
                        <SignUpValo />
                        </div>
                        </Fade>
                    </Modal>
                    <button  onClick={handleOpen2} className="button">
                        <img src={logo_PUBG}alt='PUBG' />
                    </button>
                    <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open2}
                            onClose={handleClose2}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                        >
                        <Fade in={open2}>
                        <div className={classes.paper}>
                        <SignUpPubg/>
                        </div>
                        </Fade>
                    </Modal>
                    <button onClick={handleOpen3} className="button">
                        <img src={logo_ML} alt='ML' />
                    </button>
                    <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open3}
                            onClose={handleClose3}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                        >
                        <Fade in={open3}>
                        <div className={classes.paper}>
                            <SignUpML />
                        </div>
                        </Fade>
                    </Modal>
                </div>
                <div className="boxchoice">
                    <h1>USER DATA</h1>
                    <form method="post">
                        <div className="txt_field_signup">
                            <input type="text" required onChange={(e) => setUsername(e.target.value)}/>
                            <label1>USERNAME</label1>
                        </div>
                        <div className="txt_field_signup">
                            <input type="text" required onChange={(e) => setAge(e.target.value)} />
                            <labelage>AGE</labelage> 
                        </div>
                        <div className="txt_field_signup">
                            <Select 
                            options={region_options}
                            styles={customStyles}
                            isSearchable={true}
                            onChange={(event) => setRegion(event.value)}
                            />
                            <label>REGION</label> 
                        </div>
                        <div className="txt_field_signup">
                             <Select 
                            options={time_options}
                            styles={customStyles}
                            isSearchable={true}
                            onChange={(event) => setOnlinetime(event.value)}
                            />
                            <label4>ONLINE TIME</label4> 
                        </div>
                        <div className="txt_field_signup">
                            <Select 
                            options={gender_options}
                            styles={customStyles}
                            isSearchable={true}
                            onChange={(event) => setSex(event.value)}
                          />
                            <label2>SEX</label2> 
                        </div>
                        <div className="submitButton_signup">
                            <button type="button"  onClick={() => getRequest()}>
                                <img src="https://i.ibb.co/M8bpJzM/Component-2.png" alt="submit" />  
                            </button>
                        </div>
                    </form>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default SignUp
