import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ApolloProvider>
    ,
  </React.StrictMode>
);
