import React from 'react'
import tulisanKecil from '../../assets/FooterAsset/FINDMATES.png'
import instaLogo from '../../assets/FooterAsset/insta.png'
import twitterLogo from '../../assets/FooterAsset/twitter.png'
import twitchLogo from '../../assets/FooterAsset/twitch.png'
import './index.css'
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

const Footer = () => {
const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <>
        <div className="main-footer">
                <div className="row">
                    {/*column 1*/}
                    <div className="col1">
                        <p>All Rights Reserved</p>
                    </div>
                    {/*column 2 */}
                    <div className="colpisah">
                    </div>
                    <div className="col2">
                        <a href="https://instagram.com/omarmoch13/">
                            <img className="insta" src={instaLogo} alt="insta"/>
                        </a>
                    </div>
                    <div className="col2">
                        <a href="https://twitter.com/JYPETWICE">
                            <img className="twitter" src={twitterLogo} alt="twitter"/>
                        </a>
                    </div>
                    <div className="col2">
                        <a href="https://www.twitch.tv/kyedae_">
                            <img className="twitch" src={twitchLogo} alt="twitch"/>
                        </a>
                    </div>
                    <div className="colpisah">
                    </div>
                    {/*column 3 */}
                    <div className="col3">
                        <button type="button" onClick={handleOpen} className="btn-aboutus">
                        <img className="tulisan-kecil" src={tulisanKecil} alt="tulisankecil"/>
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
                    </div>
                </div>
        </div>
        </>
    )
}
export default Footer
