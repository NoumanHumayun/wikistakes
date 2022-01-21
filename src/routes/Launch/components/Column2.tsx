import { Row } from "components/structural";
import { Bullets } from "./styled.component";
interface Column2Props {
  step: Number;
}

const Column2 = (props: Column2Props) => {
  const { step } = props;
  return (
    <>
      {step === 1 && (
        <Row style={{ margin: "40% 5% 0 5%" }}>
          <Bullets style={{ marginLeft: "0" }}>
            <br />
            <strong style={{ textDecoration: "underline" }}>Understand!</strong>
            &nbsp;A kwiki sweepstake is a legal contract between you and the
            participants. Once launched, you must comply with the Official Rules
            and they cannot be changed.
            <br />
            <br />
            <strong style={{ textDecoration: "underline" }}>Remember!</strong>
            &nbsp;You're agreeing to a 30-minute video call with the winner of
            your kwiki. Do not try to change or add anything to the prize.
            {/* Blog: Why is the prize a video call? */}
            <br />
            <br />
            <strong style={{ textDecoration: "underline" }}>Important!</strong>
            &nbsp;Do not include any third-party brands, products, logos,
            trademarks, etc. in your sweepstake. This campaign is about you and
            your content only!
          </Bullets>
        </Row>
      )}
      {step === 2 && (
        <Row style={{ margin: "25% 5% 0 5%" }}>
          <Bullets style={{ marginLeft: "0" }}>
            <br />
            <strong style={{ textDecoration: "underline" }}>
              Start/ End Date
            </strong>
            &nbsp;defines the entry period of your kwiki. Participants can begin
            to enter at 12:01am EST on the start date up until 11:59pm EST on
            the end date.
            <br />
            <br />
            <strong style={{ textDecoration: "underline" }}>
              Promotional content
            </strong>
            &nbsp;lets people know it's you! Use this to get followers excited
            about your kwiki!
            <br />
            <br />
            <strong style={{ textDecoration: "underline" }}>
              Featured content
            </strong>
            &nbsp;becomes available to participants after entering. Participants
            receive access to your featured content only during the entry
            period.
            <br />
            <br />
            <strong style={{ textDecoration: "underline" }}>
              Content description
            </strong>
            &nbsp;provides a short description of your featured content
          </Bullets>
        </Row>
      )}
      {step === 3 && (
        <Row style={{ margin: "60% 5% 0 5%" }}>
          <Bullets style={{ marginLeft: "0" }}>
            <br />
            <strong style={{ textDecoration: "underline" }}>
              Personal data
            </strong>
            &nbsp;will not be shared on your kwiki page
          </Bullets>
        </Row>
      )}
    </>
  );
};

export default Column2;
