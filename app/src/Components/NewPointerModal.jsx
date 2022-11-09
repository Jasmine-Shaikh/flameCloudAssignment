import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function NewPointerModal(props) {
    
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
          Pointer Name
        </Typography>

        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              textAlign: "left",
              color: "#353535",
              marginTop: "10px",
              marginBottom: "10px"
            }}
            variant="body1"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nam atque at dolore ullam similique, omnis doloremque. Voluptatum rerum nulla soluta odit repudiandae dolore under
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
            fontSize: "15px",
            fontWeight: "400",
            color: "#64748B",
          }}>
               NAME <br/>  NAME Pointer
              </Typography>
          </Box>
        </Box>
      </Box>
        </div>
    );
}

export default NewPointerModal;