import React from "react"
import { Box, Typography } from "@mui/material"
import Hero from "./Hero"
import PopularProjects from "./PopularProjects"
import ReviewSlickSlider from "./ReviewSlickSlider"
import Playstore from "./Playstore"

const Home = () => {
  return (
    <Box>
      <Hero />
      
      <PopularProjects />

      <Box
        maxWidth={{ xs: "95%", md: "85%" }}
        margin={"auto"}
        paddingBottom={"3rem"}
      >
        <Playstore />

        <ReviewSlickSlider />
      </Box>
    </Box>
  )
}

export default Home
