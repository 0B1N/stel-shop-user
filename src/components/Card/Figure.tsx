import styled from "styled-components";

import Image from "next/image";

type FigureProps = {
  alt: string;
  src: string;
  className?: string;
};

function Figure({ className, src, alt }: FigureProps) {
  return (
    <figure className={className} data-empty={!src}>
      <Image src={src} fill={true} alt={alt} />
    </figure>
  );
}

export default styled(Figure)`
  position: relative;
  font-size: 0;
  border-radius: 21px;
  overflow: hidden;
  background-color: #949494;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;

  &[data-empty="true"] {
    width: 299px;
    height: 299px;
  }
`;
