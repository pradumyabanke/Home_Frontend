import React from 'react';
import { Box,TextField,Button,Typography ,Link, Autocomplete} from '@mui/material'

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaCcVisa,FaCcMastercard } from "react-icons/fa";



const AddCard = () => {

   
  
  return (
    <Box>
      <Box width={'90%'} margin={'auto'} pt={'90px'}>
      <Box padding={' 0px 20px 0px 20px '}>
        <Typography color={'#305966'}>Accepted Cards</Typography>
        <FaCcVisa style={{fontSize:'35px', marginRight:'10px',color:'#FF914D'}}/>
        <FaCcMastercard style={{fontSize:'35px', marginRight:'10px',color:'#FF914D'}}/>
        </Box>
      <Box   padding={'15px 20px'} >
        
        <Box >
        <TextField id="card" label="Card Number" variant="standard"  sx={{ width: '100%',mb:'10px' }} />
        <Box display={'flex'} columnGap={'10px'} mb={'10px'}>
<TextField id="date" label="Expiry Date" variant="standard" />
        <TextField id="cvv" label="CVV" variant="standard" />

</Box>

      

        <TextField id="name" label="Name (optional)" variant="standard"  sx={{ width: '100%',mb:'10px' }} />
        <Box display={'flex'} alignItems={'center'}>
        <Checkbox defaultChecked   sx={{ color:'#FF914D','&.Mui-checked': {color: '#FF914D'}}} />
        <Typography color={'#305966'}>Save Card</Typography>

        </Box>
        
<Box display={'flex'} justifyContent={'center'}>
<Button href='/order' variant={'contained'} sx={{width:'60%',bgcolor:'#FF914D',mt:'16px',textTransform:'capitalize', ":hover":{bgcolor:'#FF914D'}}}>Add Card</Button>

</Box>
        


        </Box>
      



</Box>

      </Box>
      
    </Box>
  )
}

export default AddCard