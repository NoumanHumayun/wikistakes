import { Row } from "components/structural";
import {
  TabContainer,
  Image,
  CategoryText,
  TitleText,
  BlogText,
  ReadText,
} from "./styled.components";

interface BlogTileProps {
  category?: string;
  title?: string;
  background: string;
  by?: string;
  date?: string;
  placeholder: string;
}

const BlogTile = (props: BlogTileProps) => {
  const { background, category, title, by, date, placeholder } = props;
  return (
    <TabContainer>
      <Image src={background} />
      <CategoryText>Uncategorized</CategoryText>
      <TitleText style={{ margin: "10px 5%" }}>
        Part 2: How do kwiki sweepstakes compare to other monetization methods?
      </TitleText>
      <Row gap="0px">
        <BlogText style={{ margin: "0 5%" }}>By: </BlogText>
        <TitleText style={{ marginLeft: "-25%" }}>Will W.</TitleText>
        <BlogText style={{ margin: "0 5%" }}>December 30, 2021 </BlogText>
      </Row>
      <BlogText style={{ margin: "10px 5%" }}>
        It's not easy getting paid as an influencer. Most monetization methods
        are designed to favor the party making payments e.g. the brand or the
        platform. As an influencer, your share …
      </BlogText>
      <ReadText>Read more</ReadText>
    </TabContainer>
  );
};

export default BlogTile;
