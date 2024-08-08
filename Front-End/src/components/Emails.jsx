import React, { useEffect, useState } from "react";
import Email from "./Email";
import useGetAllEmails from "../hooks/useGetAllEmails";
import { useSelector } from "react-redux";

const Emails = () => {
  useGetAllEmails();
  const { emails , SearchText } = useSelector((store) => store.app);
  
  const [filterEmail,setfilterEmail] = useState(emails);

  useEffect(()=>{
    const filteredEmail = emails.filter((email)=>{
      return email.subject.toLowerCase().includes(SearchText.toLowerCase()) || email.to.toLowerCase().includes(SearchText.toLowerCase()) || email.message.toLowerCase().includes(SearchText.toLowerCase())
    })
  },[])

  return <div>{emails && emails?.map((email) => <Email key={email._id} email={email}/> )}</div>;
};

export default Emails;
