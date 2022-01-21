import { ImageContainer, Container } from "./styled.components";
import { ReactComponent as SearchIcon } from "assets/svg/search.svg";
import prompt1 from "assets/png/prompt1.png";
import prompt2 from "assets/png/prompt2.png";
import prompt3 from "assets/png/prompt3.png";
import { Column, Row } from "components/structural";
import { H3, Para } from "components/typography";

interface PromptProps {
  ref?: any;
  forwardRef?: any;
  onChange?: any;
  value?: string;
  name?: string;
  background?: string;
  noBorder?: boolean;
  placeholder?: string;
}

const Prompt = (props: PromptProps) => {
  return (
    <>
      <Row style={{ margin: "10% 20%" }}>
        <Column width="50%">
          <ImageContainer src={prompt1} />
        </Column>
        <Column>
          <H3>
            Monetize your <span style={{ color: "#FF8B00" }}>content</span>
          </H3>
          <Para>
            A kwiki is a one-time monetization event. It provides followers with
            early access to your newest content. Use them whenever you have
            something special coming up!
          </Para>
        </Column>
      </Row>
      <Row style={{ margin: "0 20%" }}>
        <Column>
          <H3>
            Engage with your <span style={{ color: "#FF8B00" }}>Audience</span>
          </H3>
          <Para>
            Kwikis are all about you and your followers. Followers might enjoy
            your content but they love you! A tvideo call can be the experience
            of a lifetime for one lucky winner!
          </Para>
        </Column>
        <Column width="50%">
          <ImageContainer src={prompt2} />
        </Column>
      </Row>
      <Row style={{ margin: "10% 20%" }}>
        <Column width="50%">
          <ImageContainer src={prompt3} />
        </Column>
        <Column>
          <H3>
            Get more value for your
            <span style={{ color: "#FF8B00" }}>work</span>
          </H3>
          <Para>
            A kwiki complements traditional monetization methods, it does not
            replace them! When your kwiki is over, post your content as usual
            and continue earning through ad sales and brand sponsorships.
          </Para>
        </Column>
      </Row>
    </>
  );
};

export default Prompt;
