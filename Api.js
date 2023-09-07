import axios from 'axios';

const API_URL='https://pixabay.com/api/';
const API_Key='38717679-576c4cab72256be2e3aaf7791';

export const getImages = async(text)=>{
    try{
      return await axios.get(`${API_URL}/?key=${API_Key}&q=${text}&image_type=photos&per_page=156&safe_search=true`);
    }
    catch(error){
        console.log('error from api' , error.message );
    }
}