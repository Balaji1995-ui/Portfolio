import React from "react";
import Button from "@material-ui/core/Button"
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function Down(){
    const onDownload =()=>{
const link = document.createElement("a");
link.download =`Balaji_Resume.pdf`;
link.href="./Balaji_Resume.pdf";
link.click();
    };
    return(
        <div className="buttons">
            <React.Fragment>
               
                <Button onClick={onDownload} variant="contained" color="primary"> <FileDownloadIcon/>
                <span>Download CV</span>
                </Button>
            </React.Fragment>

        </div>
    )
}
export default Down;