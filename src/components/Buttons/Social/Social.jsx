import { socials } from "../../../data/data";
import { IconStyled, IconWrapper } from "./Social.styled";

const Social = () => {
  return (
    <IconWrapper>
      {socials.map(({ id, icon: Icon, link }) => (
        <IconStyled
          key={id}
          as="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Icon && <Icon />}
        </IconStyled>
      ))}
    </IconWrapper>
  );
};

export default Social;
