import { socials } from "../../data/data";
import { IconStyled, IconWrapper } from "./styles/Social.styled";

const Social = () => {
  return (
    <IconWrapper>
      {socials.map(({ id, icon: Icon }) => (
        <IconStyled>{Icon && <Icon key={id} />}</IconStyled>
      ))}
    </IconWrapper>
  );
};

export default Social;
