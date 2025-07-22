import { Box } from "@mui/material";
import Portmain from "./Portmain";
// import Portnavbar from "./Portnavbar";
import black from "../images/black.jpg"
import Portend from "./Portend";

// import Portsmain from "./Portsmain";
// import Porttmain from "./Porttmain";
// import Portfmain from "./Portfmain";

function Portofolio(){
 
    return(
        
            <Box sx={{padding:"10px",borderRadius:"24px"}}>
                <Box sx={{backgroundImage:`url(${black})`,backgroundSize:"cover",borderRadius:"24px 24px 24px 24px",backgroundPosition:"center",minHeight:"100vh",padding:"10px"}}>
    
                {/* <Portnavbar/> */}
                <Portmain/>
                <Box sx={{width:"full"}}>
                    <Portend/>
                    </Box>

                </Box>

             
                {/* <Box sx={{backgroundImage:`url(${black})`,backgroundSize:"cover",borderRadius:"0px 0px 0px 0px ",backgroundPosition:"center",minHeight:"100vh",padding:"10px"}}>
    
               
                 <Portsmain/>
                 
                </Box>
                <Box sx={{backgroundImage:`url(${black})`,backgroundSize:"cover",borderRadius:"0px 0px 24px 24px",backgroundPosition:"center",minHeight:"100vh",padding:"10px"}}>
    
               
                    <Porttmain/> */}
                  
                        
                </Box>
             
                
            // </Box>
 
           
      
    )
}

export default  Portofolio;