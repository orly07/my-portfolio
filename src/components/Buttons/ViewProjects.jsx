import { Link } from "react-scroll";
import { ButtonStyled } from "./styles/ViewProjects.styled";
import { BsPersonWorkspace } from "react-icons/bs";

const ViewProjects = () => {
  return (
    <Link to="projects" smooth={true} duration={1000} spy={true} offset={-50}>
      <ButtonStyled>
        View Projects <BsPersonWorkspace size={25} />
      </ButtonStyled>
    </Link>
  );
};

export default ViewProjects;
