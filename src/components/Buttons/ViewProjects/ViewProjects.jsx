import { Link } from "react-scroll";
import { ButtonStyled } from "./ViewProjects.styled";
import { FaCode } from 'react-icons/fa';
const ViewProjects = () => {
  return (
    <Link to="projects" smooth={true} duration={1000} spy={true} offset={-50}>
      <ButtonStyled>
        View Projects <FaCode size={25} />
      </ButtonStyled>
    </Link>
  );
};

export default ViewProjects;
