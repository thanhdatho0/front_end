import { Navigator } from "./Navigator";
import axios from "axios";
interface NavigatorData {
  data: Navigator[];
}

export const getAllNavigator = async () => {
    try{
        return axios.get<NavigatorData>(
            'http://localhost:5254/api/categories'
        );
    }catch(error){
        if(axios.isAxiosError(error)){
            console.log("Error Message", error.message);
            return error.message;
        }
        else{
            console.log("Unexpected Error", error);
            return "Unexpected Error";
        }
    }
};
