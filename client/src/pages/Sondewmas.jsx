import { useState } from "react";
// import Warper from './Warper';
// import Popup from "reactjs-popup";
import FormFill from "./Form";
import "reactjs-popup/dist/index.css";
import "../css/new.css";
import { Box, Modal } from "@mui/material";
//

const ControlledPopup = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <button
        type="button"
        className="button"
        onClick={() => setOpen((o) => !o)}
      >
        Controlled Popup
      </button>
      {/* <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
          omnis delectus nemo, maxime molestiae dolorem numquam mollitia,
          voluptate ea, accusamus excepturi deleniti ratione sapiente!
          Laudantium, aperiam doloribus. Odit, aut.
        </div>
      </Popup> */}
      <Modal open={open} onClose={closeModal}>
        <Box sx={style}>
          {/* <Typography variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <FormFill/>
        </Box>
      </Modal>
    </div>
  );
};

export default ControlledPopup;
