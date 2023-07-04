import React, { useState } from "react";
import InputTextFields from "../Components/Textfield";
import {Container, Typography, Box} from '@mui/material';
import Buttons from "../Components/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AllertMessages from "../Components/AllertMessage.js";
import Navigation from "../Components/Navbar";
function HalamanSignin(params){
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log("dataaa email", data.get("email"));
        console.log("dataaa pass", data.get("password"));

        const email = data.get("email");
        const password = data.get("password");

        if(email === "admin@gmail.com")
        setIsSuccess(true).
        console.log("haiii")
    };
    const handleClose = () => {
        setIsSuccess(false);
        
    };

    return(
        <div>
            <Navigation/>
        <Container maxWidth="xs">
            <Box 
            sx={{
                marginTop: 20,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}
            component="form"
            onSubmit={handleSubmit}
            >
            <Typography variant="h4" align="center" color="primary" gutterBottom>Sign In</Typography>
                <InputTextFields
                    id="email"
                    label="Email Address"  
                    variant="outlined" 
                    fullWidth
                    required
                    margin="normal"
                    autoFocus
                    name="email"
                    type="text"
                    
                    />
                    <div style={{display:"flex", width:"100", position:"relative"}}>
                        
                        <InputTextFields
                        id="password"
                        label="Password"  
                        variant="outlined" 
                        fullWidth
                        required
                        margin="normal"
                        autoFocus
                        name="password"
                        type={isShowPassword ? "text" : "password"}
                        
                        />
                    
                        <div style={{position:"absolute", right:0, top:33 , cursor: "pointer"}}
                        onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? <VisibilityOff fontSize="small"/> : <Visibility fontSize="small"/>}
                        </div>
                    </div>
                    <Buttons
                    type="submit"
                    variant="contained"
                    fullWidth
                    label="Sign In"
                    />
                    <AllertMessages
                    label="your email and password is correct!"
                    open={isSuccess}
                    severity="success"
                    onClose={handleClose}
                    />

            </Box>

        </Container>
        </div>
    );
}

export default HalamanSignin;