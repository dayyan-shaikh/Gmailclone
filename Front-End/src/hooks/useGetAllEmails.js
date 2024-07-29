import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setEmails } from "../redux/appSlice";

const useGetAllEmails = () => {
    const dispatch = useDispatch()
    const {emails} = useSelector(store=>store.app)
    useEffect(() =>{
        const fetchemails = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/v1/email/getallemails",{
                    withCredentials:true
                })
                dispatch(setEmails([...emails,res.data.emails]))
            } catch (error) {
                console.log(error);
            }
        }
        fetchemails();
    },[])  
} 

export default useGetAllEmails;