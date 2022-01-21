import React from "react";
import { H2, Separator } from "components/typography";

const Contact = () => {
  const [snackbarData, setSnackbarData] = React.useState<any>({
    message: "",
    description: "",
    type: "error",
    show: false,
  });

  return (
    <>
      <H2>Contact Us</H2>
      <Separator margin="16px 0px 24px 0px" />
    </>
  );
};

export default Contact;
