import { useParams, useHistory } from "react-router-dom";
import { Column, Row } from "components/structural";
import {
  CustomButton,
  H5,
  H2,
  Para,
  Separator,
  CustomLabel,
  Label
} from "components/typography";
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

const secondsToTime = (secs: number) => {
  let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    h: hours,
    m: minutes,
    s: seconds,
  };
  return `${hours}:${minutes}:${seconds}`;
};
const Kwiki = () => {
  const { social } = useParams<any>();
  return (
    <>
      <Row margin="0px 100px" style={{ height: "85%" }}>
        <Column width="60%">
          <Influencers width="600px" />
        </Column>
        <Column width="40%">
          <H5 style={{ margin: "25% 0 0 0" }}>
            Meet
            <span style={{ color: "#FF8B00", margin: "0px," }}> {social}</span>
          </H5>
          <Row margin="5% 0">
            <Column>
              <CustomLabel>Start Date</CustomLabel>
              <Label>state.startDate</Label>
            </Column>
            <Column>
              <CustomLabel>End Date</CustomLabel>
              <Label>state.endDate</Label>
            </Column>
          </Row>
          <Row margin="5% 0">
            <CustomLabel>
               <strong>Kwiki Ends: </strong>{secondsToTime(1642732188)}
            </CustomLabel>
          </Row>
          <Row margin="5% 0">
            <Column>
              <CustomLabel>All participants receive access to:</CustomLabel>
              <Label>state.description</Label>
            </Column>
          </Row>
          <Row margin="5% 0">
            <Column>
              <CustomLabel>One lucky winner will be entitled to:</CustomLabel>
              <Label>30 minute video call with {social}</Label>
            </Column>
          </Row>


          <CustomButton
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/enter";
            }}
          >
            Enter Now
          </CustomButton>
        
        </Column>
        <Separator margin="16px 0px 24px 0px" />
      </Row>
      {/* <Row margin="0px 100px">
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
      </Row> */}
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

export default Kwiki;
