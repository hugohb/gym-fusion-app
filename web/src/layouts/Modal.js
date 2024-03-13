// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

import { Modal, Backdrop, Fade } from "@mui/material";
import ProfileInfoCard from "components/Cards/ProfileInfoCard";
import MDBox from "components/MDBox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function Dialogo({ open, handleClose, title, children }) {
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <MDBox sx={style}>
            <ProfileInfoCard title={title} onClose={handleClose}>
              {children}
            </ProfileInfoCard>
          </MDBox>
        </Fade>
      </Modal>
    </div>
  );
}

Dialogo.defaultProps = {
  title: "Titulo",
};

Dialogo.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Dialogo;
