import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
// import { Link } from 'react-router-dom';

function SopAccess(props) {
  return (
    <div>
      <Box>
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
          SOP Access
        </Typography>

        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "44px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#2563EB",
              marginTop: "10px",
            }}
            variant="h1"
          >
            Marketing
          </Typography>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #CBD5E1",
              borderRadius: "4px",
            }}
          >
              <Typography  sx={{
            fontSize: "12px",
            fontWeight: "400",
            color: "#64748B",
          }}>
               TEAMMATES <br/>  Select Members
              </Typography>
            <AddBoxRoundedIcon color="action"/>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "44px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#2563EB",
              marginTop: "20px",
            }}
            variant="h1"
          >
            Sales
          </Typography>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #CBD5E1",
              borderRadius: "4px",
            }}
          >
              <Typography  sx={{
            fontSize: "12px",
            fontWeight: "400",
            color: "#64748B",
          }}>
               TEAMMATES <br/>  Select Members
              </Typography>
            <AddBoxRoundedIcon color="action"/>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "44px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#2563EB",
              marginTop: "20px",
            }}
            variant="h1"
          >
            Design
          </Typography>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #CBD5E1",
              borderRadius: "4px",
            }}
          >
              <Typography  sx={{
            fontSize: "12px",
            fontWeight: "400",
            color: "#64748B",
          }}>
               TEAMMATES <br/>  Select Members
              </Typography>
            <AddBoxRoundedIcon color="action"/>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default SopAccess;
