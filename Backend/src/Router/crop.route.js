import {Router} from 'express'
import axios from 'axios';

const router = Router();

router.post('/crop_prediction', async(req,res) => {
    try{
        const {temperature, ph, rainfall} = req.body;
        if(!temperature || !ph || !rainfall){
            throw error("Something is missing!!");
        }

        const response = await axios.post('http://localhost:8000/predict',
            {
                temperature,
                ph,
                rainfall
            },
            {
                header:{
                    'Content-Type': 'application/json',
                }
            }
        );

        if(!response){
            throw error("Not getting response from model.")
        }
        res.json({ crop: response.data.crop });

    }
    catch(error){
        console.log(error)
    }
})

export default router;