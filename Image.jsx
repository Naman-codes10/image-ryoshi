
import { Card,styled } from '@mui/material'

const Styleimage= styled('img')({
    height:380,
    width:"100%",
    objectFit: "fill"


});

const Image= ({image})=>{
    return(
        <Card className='card1'>
            <Styleimage src ={image.largeImageURL} alt='hello' className='card'/>
        </Card>
    )
}
export default Image;