import * as S from "./styles/GetinToch.styled";
import { Link } from "react-scroll";
const GetinTouch = () => {
  return (
    <Link to="contact" smooth={true} duration={1000} spy={true} offset={-50}>
      <S.ButtonStyled>Get in Touch</S.ButtonStyled>
    </Link>
  );
};

export default GetinTouch;
