import { Column, Row } from "components/structural";
import { CustomButton, H1, H2, Para, Separator } from "components/typography";
import { ReactComponent as Influencers } from "assets/svg/Group 15.svg";
import ScrollTo from "react-scroll-into-view";
import dance from "assets/svg/dance.svg";
import Prompt from "components/Prompt";
import Who from "components/Who";
import How from "components/How";
import What from "components/What";
import Pricing from "components/Pricing";
import Blogs from "components/Blogs";
import Featured from "components/Featured";
import Footer from "components/Footer";

const Home = () => {
  return (
    <>
      <Row margin="0px 100px">
        <Column width="50%">
          <H1>engage with</H1>
          <H1>
            <p style={{ color: "#FF8B00", margin: "0px" }}>followers</p> like
          </H1>
          <H1>never before</H1>
          <CustomButton
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/launch";
            }}
          >
            Launch your KWIKI
          </CustomButton>
        </Column>
        <Column width="50%">
          <Influencers width="600px" />
        </Column>
        <Separator margin="16px 0px 24px 0px" />
      </Row>
      <Row margin="0px 100px">
        <div
          style={{
            backgroundImage: `url(${dance})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            width: "100%",
            height: "80vh",
            padding: "5%",
          }}
        >
          <Column width="32%">
            <H2>
              What is a
              <span style={{ color: "#FF8B00", margin: "0px" }}> KWIKI ?</span>
            </H2>
            <Para>
              A kwiki is a short promotional campaign that gives your followers
              the chance to meet you! The campaign is similar to a raffle, where
              every purchase goes to supporting you directly. Everyone who
              enters into your kwiki will receive two things: access to your
              newest content and the chance to meet you on a 30-minute video
              call.
              <br />
              <br />
              You control the content, timing and promotion of your kwiki. When
              it's is over, access to your content ends, a winner is randomly
              selected, and your 30-minute video call is scheduled.
              <br />
              <br />
              After your video call with the winner is completed, we send you
              the money raised from your campaign. Kwikis are a new type of
              sweepstake designed to support influencers and content creators.
            </Para>

            <ScrollTo selector="#Featured">
              <CustomButton style={{ width: "60%" }}>
                Featured KWIKI
              </CustomButton>
            </ScrollTo>
          </Column>
          <Column width="50%"></Column>
        </div>
      </Row>
      <Row margin="0 100px">
        <Prompt />
      </Row>
      <Row margin="0 100px">
        <Who />
      </Row>
      <Row margin="0 100px">
        <How />
      </Row>
      <Row margin="8% 100px">
        <What />
      </Row>
      <Row margin="8% 100px">
        <Pricing />
      </Row>
      <Row margin="0 100px">
        <Blogs />
      </Row>
      <Row margin="5% 100px">
        <Featured refName="Featured" />
      </Row>
      <div
        style={{
          background: "#121212",
          padding: "2%",
          width: "100%",
        }}
      >
        <Footer />
      </div>
    </>
  );
};

export default Home;
