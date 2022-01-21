import { ImageContainer, Container } from "./styled.components";
import { ReactComponent as SearchIcon } from "assets/svg/search.svg";
import who from "assets/png/Ellipse-2.png";
import influencer from "assets/svg/influencer.svg";
import gamer from "assets/svg/gamer.svg";
import podcaster from "assets/svg/podcaster.svg";
import virtualArtist from "assets/svg/virtualArtist.svg";
import musician from "assets/svg/musician.svg";
import videoCreator from "assets/svg/videoCreator.svg";
import blogger from "assets/svg/blogger.svg";
import allKind from "assets/svg/allKind.svg";
import { Column, Row } from "components/structural";
import { H3, H4, Para } from "components/typography";
import Tab from "components/Tab";

interface WhoProps {
  ref?: any;
  forwardRef?: any;
  onChange?: any;
  value?: string;
  name?: string;
  background?: string;
  noBorder?: boolean;
  placeholder?: string;
}

const Who = (props: WhoProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${who})`,
        borderRadius: "2%",
        padding: "2%",
        width: "100%",
      }}
    >
      <Row style={{ width: "100%" }}>
        <H4>Who uses KWIKI</H4>
      </Row>
      <Row>
        <H4 style={{ color: "#FF8B00" }}>SWEEPSTAKES ?</H4>
      </Row>
      <Row style={{ width: "100%" }} margin="5% 0 0 0" justifyContent="center">
        <Tab placeholder="Influencers" background={influencer} />
        <Tab placeholder="Gamers" background={gamer} />
        <Tab placeholder="Video Creators" background={videoCreator} />
        <Tab placeholder="Podcasters" background={podcaster} />
      </Row>
      <Row style={{ width: "100%" }} margin="2% 0" justifyContent="center">
        <Tab placeholder="Virtual Artists" background={virtualArtist} />
        <Tab placeholder="Musicians" background={musician} />
        <Tab placeholder="Bloggers" background={blogger} />
        <Tab placeholder="Content Creators of All Kind" background={allKind} />
      </Row>
    </div>
  );
};

export default Who;
