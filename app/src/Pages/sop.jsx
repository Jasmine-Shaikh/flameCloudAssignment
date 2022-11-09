import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import SopAccess from "../Components/SopAccess";
import DepartmentAccordions from "../Components/DepartmentAccordions";
import NewPlanModal from "../Components/NewPlanModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
  bgcolor: "#F5F5F5",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px"
};


function Sop(props) {
  const [ManageAccessopen, setManageAccessOpen] = React.useState(false);
  const handleManageAccessOpen = () => setManageAccessOpen(true);
  const handleManageAccessClose = () => setManageAccessOpen(false);
  
  const [NewPlanopen, setNewPlanOpen] = React.useState(false);
  const handleNewPlanOpen = () => setNewPlanOpen(true);
  const handleNewPlanClose = () => setNewPlanOpen(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box sx={{ paddingTop: "5%", width: "90%" }}>
        <Box
          sx={{
            height: "24px",
            width: "96px",
            borderRadius: "nullpx",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "19px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#64748B",
            }}
            variant="body2"
          >
            SOP
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "44px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#0F172A",
            }}
            variant="h1"
          >
            ACTION PLANS
          </Typography>
          <Box>
            <Stack spacing={2} direction="row">
              <Button
                onClick={handleManageAccessOpen}
                sx={{
                  textTransform: "capitalize",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "8px 16px",
                  gap: "8px",
                  width: "hug",
                  height: "40px",
                  border: "1px solid #2563EB",
                  borderRadius: "4px",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "19px",
                  color: "#2563EB",
                }}
                variant="outlined"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_183)">
                    <path
                      d="M11.3333 14V12.6667C11.3333 11.9594 11.0524 11.2811 10.5523 10.781C10.0522 10.281 9.37392 10 8.66667 10H3.33334C2.62609 10 1.94782 10.281 1.44772 10.781C0.947623 11.2811 0.666672 11.9594 0.666672 12.6667V14"
                      stroke="#2563EB"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 7.33333C7.47275 7.33333 8.66666 6.13943 8.66666 4.66667C8.66666 3.19391 7.47275 2 6 2C4.52724 2 3.33333 3.19391 3.33333 4.66667C3.33333 6.13943 4.52724 7.33333 6 7.33333Z"
                      stroke="#2563EB"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.3333 14V12.6667C15.3329 12.0758 15.1362 11.5018 14.7742 11.0349C14.4122 10.5679 13.9054 10.2344 13.3333 10.0867"
                      stroke="#2563EB"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6667 2.08667C11.2403 2.23353 11.7487 2.56713 12.1118 3.03487C12.4748 3.50261 12.6719 4.07789 12.6719 4.67C12.6719 5.26211 12.4748 5.83739 12.1118 6.30513C11.7487 6.77287 11.2403 7.10647 10.6667 7.25333"
                      stroke="#2563EB"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_183">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Manage Access
              </Button>
              {/* --------------------------------Manage Access modal--------------------------- */}
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={ManageAccessopen}
                onClose={handleManageAccessClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={ManageAccessopen}>
                  <Box sx={style}>
                    <SopAccess />
                    <Stack direction={"row-reverse"} p={2} gap={1}>
                      <Button
                        sx={{
                          padding: "8px",
                          width: "119px",
                          height: "40px",
                          background: "#2563EB",
                          borderRadius: "4px",
                          boxShadow: "none",
                          textTransform: "capitalize",
                        }}
                        onClick={handleManageAccessClose}
                        variant="contained"
                      >
                        Update
                      </Button>

                      <Button
                        color="error"
                        variant="outlined"
                        onClick={handleManageAccessClose}
                      >
                        Cancel
                      </Button>
                    </Stack>
                  </Box>
                </Fade>
              </Modal>
              <Button
                sx={{
                  padding: "8px ",
                  width: "119px",
                  height: "40px",
                  background: "#2563EB",
                  borderRadius: "4px",
                  boxShadow: "none",
                  textTransform: "capitalize",
                }}
                variant="contained"
                startIcon={<AddBoxRoundedIcon />}
                onClick={handleNewPlanOpen}
              >
                New Plan
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={NewPlanopen}
                onClose={handleNewPlanClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={NewPlanopen}>
                  <Box sx={style}>
                    <NewPlanModal />
                    <Stack direction={"row-reverse"} p={2} gap={1}>
                      <Button
                        sx={{
                          padding: "8px",
                          width: "119px",
                          height: "40px",
                          background: "#2563EB",
                          borderRadius: "4px",
                          boxShadow: "none",
                          textTransform: "capitalize",
                        }}
                        onClick={handleNewPlanClose}
                        variant="contained"
                      >
                        Create
                      </Button>

                      <Button
                      sx={{
                        width: "119px",
                        textTransform: "capitalize",
                      }}
                        color="error"
                        variant="outlined"
                        onClick={handleNewPlanClose}
                      >
                        Cancel
                      </Button>
                    </Stack>
                  </Box>
                </Fade>
              </Modal>
            </Stack>
          </Box>
        </Box>
        <Box>
          <DepartmentAccordions />
          
        </Box>
      </Box>
    </div>
  );
}

export default Sop;
