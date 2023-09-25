import { StoryProps } from "@/interfaces/story";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import { createPortal } from "react-dom";
import { StoryComponent } from "../StoryComponent";

interface StoriesListComponentProps {
  storiesCategory: StoryProps[];
}

export const StoriesListComponent = ({
  storiesCategory,
}: StoriesListComponentProps) => {
  const [show, setShow] = useState(false);
  const [dataSelected, setDataSelected] = useState<StoryProps>(
    {} as StoryProps
  );

  return (
    <>
      <StoryListContainer>
        {storiesCategory.map((item, index) => {
          return (
            <Category
              key={index}
              onClick={() => {
                setDataSelected(item);
                setShow(true);
              }}
            >
              <Image
                src={item.image}
                layout="fill"
                alt={`imagem da cateogira ${item.name}`}
              />
            </Category>
          );
        })}
      </StoryListContainer>

      {show &&
        createPortal(
          <StoryComponent storiesCategory={dataSelected} setShow={setShow} />,
          document.body
        )}
    </>
  );
};

const StoryListContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Category = styled.div`
  border-radius: 100%;
  width: 60px;
  height: 60px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  :active {
    opacity: 0.6;
  }
`;
