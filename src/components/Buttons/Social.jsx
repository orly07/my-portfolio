import { socials } from "../../data/data";
import { IconStyled, IconWrapper } from "./styles/Social.styled";

const Social = () => {
  return (
    <IconWrapper>
      {socials.map(({ id, icon: Icon }) => (
        <IconStyled key={id}>{Icon && <Icon />}</IconStyled>
      ))}
    </IconWrapper>
  );
};

export default Social;
