import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as S from "./Contact.styled";
import { fadeUp, staggerContainer } from "../../animations/animation";

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
    <S.ContactWrapper
      id="contact"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <S.Title variants={fadeUp}>Contact Me</S.Title>
      <S.Subtitle variants={fadeUp}>
        Have a project or question? Let’s talk.
      </S.Subtitle>

      <S.Form ref={formRef} onSubmit={sendEmail} variants={fadeUp}>
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
