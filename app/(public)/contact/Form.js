"use client";
import React, { useContext, useRef, useState } from "react";
import "./form.css";

import Loading from "../../../components/Loading";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const opt = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: true,
};

import ReactGA from "react-ga4";
import Captcha from "react-google-recaptcha";

import { ImCross } from "react-icons/im";

import { ContactContext } from "../../contexts/Contact";

const Form = ({ closeModal }) => {
  const {
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
  } = useContext(ContactContext);

  const captchaRef = useRef(null);

  const [success, setSuccess] = useState("");
  const [formErr, setFormErr] = useState("");

  const [show, setshow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErr("");
    setSuccess("");

    if (!comment) setCommentErr("Please provide more details");
    {
    }

    if (name && email && comment && !nameErr && !emailErr && !commentErr) {
      setIsSubmitting(true);

      // token from react google captcha

      let token;
      // try {
      //   token = await captchaRef.current?.executeAsync();
      //   captchaRef.current.reset();

      //   if (!token) {
      //     try {
      //       token = await captchaRef.current?.executeAsync();
      //       captchaRef.current.reset();
      //       // console.log("no token -tryed again", token);
      //     } catch (error) {
      //       setFormErr(
      //         "issue with reCAPTCHA. Please try later.  Error code DWT"
      //       );
      //       setIsSubmitting(false);
      //       return;
      //     }
      //   }
      // } catch (error) {
      //   setFormErr("issue with reCAPTCHA. Please try later.  Error code DWT");
      //   setIsSubmitting(false);
      //   return;
      // }

      // if (!token) {
      //   console.log("here3");
      //   console.log("nedd to exit as still not token");
      //   setFormErr(
      //     "need to exit - issue with reCAPTCHA. Please try later.  Error code DWT"
      //   );
      //   setIsSubmitting(false);
      //   return;
      // }

      // end

      // stats
      const gaClick = () => {
        ReactGA.event({
          category: "contact form",
          action: "contact us request sent",
        });
      };

      gaClick();
      // end

      const opt2 = {
        position: "top-center",
      };

      const loadingToast = toast.loading("Sending message...", opt2);

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            comment,
            tel,
            // token,
          }),
        });

        // stats

        const data = await res.json();

        toast.dismiss(loadingToast);

        if (data.msg) {
          setSuccess(data.msg);

          setName("");
          setEmail("");
          setComment("");
          setTel("");
          setIsSubmitting(false);
          toast.success("Message Sent", opt);
        } else if (data.errors) {
          if (data.errors == "Google Captcha issue, please try later") {
            //reset input
            setName("");
            setEmail("");
            setComment("");
            setTel("");
          }

          // normal error - dont reset input
          toast.dismiss(loadingToast);
          toast.error("Error- please try again", opt);
          setIsSubmitting(false);
          setFormErr(data.errors);
        } else {
          toast.dismiss(loadingToast);
          toast.error("Error- please try again", opt);
          setIsSubmitting(false);
          setFormErr(data.errors);
        }
      } catch (err) {
        console.log(err);
        toast.dismiss(loadingToast);
        toast.error("Error- please try again", opt);
        setIsSubmitting(false);
        setFormErr("Error occured. Please try again");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e, item) => {
    setFormErr("");
    setSuccess("");

    if (!show) {
      // console.log("hmm");
      setshow(true);
    }

    /* eslint-disable */
    const emailRegEx = RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (item === "name") {
      setName(e.target.value);

      e.target.value.length < 3
        ? setNameErr("Name must be at least 3 characters!")
        : setNameErr("");
    }
    if (item === "email") {
      setEmail(e.target.value);
      !emailRegEx.test(e.target.value)
        ? setEmailErr("Invalid Email!")
        : setEmailErr("");
    }

    if (item === "tel") {
      setTel(e.target.value);
    }

    if (item === "comment") {
      setComment(e.target.value);
      e.target.value.length < 10
        ? setCommentErr("Please provide more details")
        : setCommentErr("");
    }
  };
  return (
    <>
      {success && (
        <div>
          <span className="alert-success center">{success}</span>
        </div>
      )}

      {formErr && (
        <div>
          <span className="alert-danger center">{formErr}</span>
        </div>
      )}

      {submitting && <Loading />}
      <div className="main-container">
        <div className="form-container">
          <ImCross
            id="modal-cross"
            aria-label="close contact form pop up"
            onClick={() => closeModal()}
          />

          <h3 className="center text-md contact-me">Contact Me</h3>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">
                Name:<span className="red-star"> *</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => handleChange(e, "name")}
                // autoFocus
                autoComplete="off"
              />
              {nameErr && <small className="text-danger">{nameErr}</small>}
              <hr />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email: <span className="red-star"> *</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                // placeholder="Email address"
                required
                value={email}
                onChange={(e) => handleChange(e, "email")}
                // autoFocus
                autoComplete="off"
              />
              {emailErr && <small className="text-danger">{emailErr}</small>}
              <hr />
            </div>
            <div className="form-group">
              <label htmlFor="tel">
                Telephone: <span className="red-star"> *</span>
              </label>
              <input
                type="tel"
                name="tel"
                id="tel"
                // placeholder="Telephone number"
                value={tel}
                onChange={(e) => handleChange(e, "tel")}
                // autoFocus
                autoComplete="off"
                required
              />
              <hr />
            </div>

            <div className="form-group">
              <label htmlFor="comment">Your Message:</label>
              <textarea
                // placeholder="Hi ......"
                rows={4}
                cols={50}
                name="comment"
                id="comment"
                autoComplete="off"
                value={comment}
                onChange={(e) => handleChange(e, "comment")}
              ></textarea>
              {commentErr && (
                <small className="text-danger">{commentErr}</small>
              )}
            </div>

            <div className="submit-button-container">
              <button id="submit-btn" type="submit" disabled={submitting}>
                {submitting ? "WAIT" : "SEND"}
              </button>
            </div>

            {show && (
              <Captcha
                ref={captchaRef}
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_CAPTCHA}
                badge="inline"
              />
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
