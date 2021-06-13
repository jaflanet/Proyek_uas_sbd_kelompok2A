import React from 'react'
import gambar_atas from "../../assets/HomeAsset/segitiga-atas.png"
import gambar_tengah from "../../assets/HomeAsset/segitiga-tengah.png"
import gambar_bawah from "../../assets/HomeAsset/segitiga-bawah.png"
import FMLogo from "../../assets/LoginAsset/Component_1.png"
import "./index.css"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AboutUs from '../AboutUs'

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

function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return(
      <>
      <div className="container-home">
        <div className="gradient-ani">
        <div className="home-row">
          <div className="home-c1">
          <div className="home-columnfull">
         <img src={gambar_atas} alt='logo' className="image-top"/>
         </div>
         </div>
        </div>
        <div className="home-row">
        <div className="home-c1"> 
          <div className="home-column1">
          <img src={gambar_tengah} alt='logo' className="image-middle"/>
          </div>
          <div className="home-column2">
          <button type="button" onClick={handleOpen} className="btn-aboutus-home">
                    <img src={FMLogo} alt ="gambar logo"   className="LOGO_FM"/>
                    </button>
                    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.transparent}>
            <AboutUs />
          </div>
        </Fade>
      </Modal>
                    <span className="InfoText">
                        FINDMATES is an online third party website dedicated<br />
                        to help gamers find teamates, and maybe a soulmate too.
                    </span>
          </div>
        </div>
        </div>
        

        <div className="home-row">
        <div className="home-c1"> 
        <div className="home-columnfull">
        <img src={gambar_bawah} alt='logo' className="image-bottom"/>
         </div>
         </div>
      </div>
      </div>
      </div>
      </>
    )
  }
export default Home;