// src/components/Buttons/Download/Download.jsx
import { DownloadStyled } from "./Download.styled";
import { AiOutlineDownload } from "react-icons/ai";

const Download = () => {
  return (
    <>
      <DownloadStyled
        href="/Orlando-cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV <AiOutlineDownload />
      </DownloadStyled>
    </>
  );
};

export default Download;
