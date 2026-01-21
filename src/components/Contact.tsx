import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

type FormState = "idle" | "sending" | "sent" | "error";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [status, setStatus] = useState<FormState>("idle");
  const [statusText, setStatusText] = useState<string>("");
  const contactFieldSx = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",
  },
  "& .MuiOutlinedInput-input": {
    color: "#000",
    WebkitTextFillColor: "#000",
    caretColor: "#000",
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: "rgba(0,0,0,0.6)",
    opacity: 1,
    WebkitTextFillColor: "rgba(0,0,0,0.6)",
  },
  "& .MuiInputLabel-root": {
    color: "rgba(0,0,0,0.75)",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(0,0,0,0.25)",
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(0,0,0,0.45)",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(0,0,0,0.7)",
  },
};

  const blackFieldStyles = {
  "& .MuiOutlinedInput-input": {
    color: "#000",
    WebkitTextFillColor: "#000", // ✅ this is the key in Chrome
  },

  "& .MuiOutlinedInput-input::placeholder": {
    color: "rgba(0,0,0,0.6)",
    opacity: 1,
    WebkitTextFillColor: "rgba(0,0,0,0.6)",
  },

  // ✅ kill Chrome autofill weird colors
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px #fff inset",
    WebkitTextFillColor: "#000",
    caretColor: "#000",
  },

  "& .MuiInputLabel-root": { color: "#000" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#000" },

  "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.35)" },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.6)" },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#000",
  },

  "& .MuiFormHelperText-root": { color: "rgba(0,0,0,0.7)" },
 };





  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nErr = name.trim() === "";
    const eErr = email.trim() === "";
    const mErr = message.trim() === "";

    setNameError(nErr);
    setEmailError(eErr);
    setMessageError(mErr);

    if (nErr || eErr || mErr) return;

    // ✅ Put REAL values here (from EmailJS dashboard)
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_uex8i84";
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_cupemaq";
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "j-y68wgMLno4Ij8EI";

    setStatus("sending");
    setStatusText("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name, email, message },
        { publicKey: PUBLIC_KEY }
      );

      setStatus("sent");
      setStatusText("Sent. I’ll get back to you soon.");

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusText("Failed to send. Try again later or email me directly.");
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Get in touch.</p>

          <Box
          component="form"
          onSubmit={sendEmail}
          noValidate
          autoComplete="off"
          className="contact-form"
>

            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : " "}
                

              />

              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : " "}
                
              />
            </div>

            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : " "}
              
            />

            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
             Send
            </Button>


            {status !== "idle" && (
              <p style={{ marginTop: 12, opacity: 0.9 }}>{statusText}</p>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
