import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "antd/dist/antd.css";
import { createUploadLink } from "apollo-upload-client";
// import client from "./configs/apollo";
import Routes from "./routes";
import { GlobalStyle } from "./globalStyles";

const theme = {
  colors: {
    primary: "#0A0529",
  },
};

const uploadLink = createUploadLink({ 
  uri: "http://localhost:2000/graphql" });

  const client = new ApolloClient({
    link: uploadLink,
    cache: new InMemoryCache(),
});

const App: FC = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </ApolloProvider>
    </Router>
  );
};

export default App;
