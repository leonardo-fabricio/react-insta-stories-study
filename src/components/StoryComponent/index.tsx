import styled from "styled-components";
import Stories from "react-insta-stories";
import { Story } from "react-insta-stories/dist/interfaces";
import { StoryProps } from "@/interfaces/story";
import { X, Play, Pause } from "@phosphor-icons/react";
import { SetStateAction, useState } from "react";

interface StoryComponentProps {
  storiesCategory: StoryProps;
  setShow: (e: SetStateAction<boolean>) => void;
}

export const StoryComponent = ({
  storiesCategory,
  setShow,
}: StoryComponentProps) => {
  const [paused, setPaused] = useState(false);

  const formatData = () => {
    const data: Story[] = storiesCategory.stories.map((story) => {
      return {
        url: story,
        duration: 3000,
        header: {
          heading: storiesCategory.name,
          profileImage: storiesCategory.image,
          subheading: storiesCategory.description,
        },
      };
    });
    return data;
  };
  return (
    <StoryContainer>
      <StoryContent>
        <Stories
          stories={formatData()}
          keyboardNavigation
          width={"100%"}
          height={"100%"}
          isPaused={paused}
        />
        <CloseStory right="16px" onClick={() => setShow(false)}>
          <X width={16} height={16} />
        </CloseStory>
        <CloseStory right="40px" onClick={() => setPaused(!paused)}>
          {paused ? (
            <Play width={16} height={16} />
          ) : (
            <Pause width={16} height={16} />
          )}
        </CloseStory>
      </StoryContent>
    </StoryContainer>
  );
};

const StoryContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

const StoryContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const CloseStory = styled.div<{ right: string }>`
  position: absolute;
  right: ${(props) => props.right};
  top: 20px;
  color: white;
  cursor: pointer;
  width: 16px;
  height: 16px;
  z-index: 9999;
  :active {
    opacity: 0.6;
  }
`;
