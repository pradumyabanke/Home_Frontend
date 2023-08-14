import React from "react";
import { Box, Typography, Link } from "@mui/material";

import applogo from "../../Assets/Images/appstore-logo.svg";
import playstorelogo from "../../Assets/Images/google-play-logo.svg";
import happy from "../../Assets/Images/happy.png";
import Typewriter from "typewriter-effect";



const Hero = () => {

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      overflow={"hidden"}
      alignItems={"center"}
      sx={{
        ":before": {
          content: `""`,
          background: "rgba(255,255,255,.6)",
          position: "absolute",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
        },
        width: "100%",
        background:
          "url(https://plus.unsplash.com/premium_photo-1683140901993-f675fec51b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGhvbWUlMjBjbGVhbmluZyUyMHNlcnZpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60) top center ",
        backgroundSize: "cover",
        position: "relative",
        backgroundAttachment: "fixed",
        padding: 0,
      }}
    >
      <Box
        position={"relative"}
        paddingTop={"110px"}
        width={"85%"}
        alignItems={"center"}
        margin={"0 auto"}
        display={"grid"}
        gridTemplateColumns={{ md: "1fr 1fr", xs: "1fr" }}
      >
        <Box>
          <Box
            fontWeight={600}
            color={"#305966"}
            fontSize={{ md: "70px", xs: "35px" }}
          >
            <Box
              component={"span"}
              position={"relative"}
              width={"100%"}
              pr={1}
              boxSizing={"border-box"}
            >
              Home{" "}
              <Box
                position={"absolute"}
                top={"-10px"}
                left={"50px"}
                sx={{ rotate: "40deg" }}
              >
                <img src={happy} width={"30%"} />
              </Box>
            </Box>
            <Box component={"span"} color={"#ff914d"}>
              Tadalal
            </Box>

            <Typewriter
              options={{
                strings: ["Cleaning", "Repairing", "Maintaining", "Painting"],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </Box>

          <Typography color={"#ff914d"} fontSize={"18px"} fontWeight={600}>
            Simplify Your Home service Experience With Home Tadalal
          </Typography>

          <Box
            display={"grid"}
            gridTemplateColumns={"40% 40%"}
            columnGap={"20px"}
            my={"20px"}
          >
            <Link href="/signup">
              {" "}
              <img src={applogo} width={{ md: "30%", xs: "10%" }} />
            </Link>
            <Link href="/signup">
              {" "}
              <img src={playstorelogo} width={{ md: "30%", xs: "10%" }} />
            </Link>
          </Box>
        </Box>

        <Box display={"flex"} justifyContent={"center"} paddingBottom={"0px"}>
          <img
            src="https://peak.net/img/peak-hero-visual.png"
            width={"83%"}
            height={"auto"}
            style={{
              display: "block",
              overflow: "clip",
              overflowClipMargin: "content-box",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
