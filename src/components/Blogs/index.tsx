import who from "assets/png/Ellipse-2.png";
import blog1 from "assets/svg/blog1.svg";
import blog2 from "assets/svg/blog2.svg";
import blog3 from "assets/svg/blog3.svg";
import { Row } from "components/structural";
import { H4 } from "components/typography";
import BlogTile from "components/BlogTile";

interface BlogsProps {
  ref?: any;
  forwardRef?: any;
  onChange?: any;
  value?: string;
  name?: string;
  background?: string;
  noBorder?: boolean;
  placeholder?: string;
}

const Blogs = (props: BlogsProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${who})`,
        borderRadius: "2%",
        padding: "2%",
        width: "100%",
      }}
    >
      <Row>
        <H4>
          <span style={{ color: "#FF8B00" }}>KWIKI </span> Blogs
        </H4>
      </Row>
      <Row margin="5% 0 0 5%" justifyContent="center">
        <BlogTile placeholder="Launch a kwiki sweepstake" background={blog1} />
        <BlogTile placeholder="Promote your kwiki" background={blog2} />
        <BlogTile placeholder="video call with winner" background={blog3} />
      </Row>
    </div>
  );
};

export default Blogs;
