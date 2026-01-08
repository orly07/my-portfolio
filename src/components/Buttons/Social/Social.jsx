import { socials } from "../../../data/data";
import { IconStyled, IconWrapper } from "./Social.styled";
import { fadeUp, staggerContainer } from "../../../animations/animation";

const Social = () => {
  return (
    <IconWrapper variants={staggerContainer} initial="hidden" animate="visible">
      {socials.map(({ id, icon: Icon, link }) => (
        <IconStyled
          key={id}
          variants={fadeUp}
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
