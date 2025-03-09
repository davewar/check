"use client";
import React, { useState, createContext } from "react";

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [tel, setTel] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [commentErr, setCommentErr] = useState("");

  const [submitting, setIsSubmitting] = useState(false);

  return (
    <ContactContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        comment,
        setComment,
        tel,
        setTel,
        nameErr,
        setNameErr,
        emailErr,
        setEmailErr,
        commentErr,
        setCommentErr,
        submitting,
        setIsSubmitting,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
