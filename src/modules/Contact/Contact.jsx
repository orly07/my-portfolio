import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as S from "./Contact.styled";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_uuepuz8",
        "template_ds96tmd",
        formRef.current,
        "noreIQGE6Gb1PNUPF"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          setStatus("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <S.ContactWrapper id="contact">
      <S.Title>Contact Me</S.Title>
      <S.Subtitle>Have a project or question? Let’s talk.</S.Subtitle>

      <S.Form ref={formRef} onSubmit={sendEmail}>
        <S.Input type="text" name="name" placeholder="Your Name" required />

        <S.Input type="email" name="email" placeholder="Your Gmail" required />

        <S.TextArea name="message" placeholder="Your Message" required />

        <S.Button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </S.Button>

        {status && <S.Status>{status}</S.Status>}
      </S.Form>
    </S.ContactWrapper>
  );
};

export default Contact;
