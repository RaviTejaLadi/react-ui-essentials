import PropTypes from "prop-types";
import React, { Component } from "react";
import { Box, Button, Typography } from "react-ui-essentials";
import { useNavigate } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ error, errorInfo });
  }
  backToHome = () => {
    const navigate = useNavigate();
    navigate("/");
  };
  render() {
    if (this.state.hasError) {
      return (
        <Box
          elevation={1}
          margin="20px"
          width="auto"
          height="auto"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            padding: "30px",
          }}
          rounded
        >
          <Typography variant="h2" underline>
            Something went wrong:
          </Typography>
          <Typography variant="p">{this.state.error && this.state.error.toString()}</Typography>
          <Box
            elevation={0}
            width="100%"
            height="auto"
            margin="5px"
            style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", alignContent: "center" }}
          >
            <Box elevation={0} margin="10px" style={{ padding: "20px" }} outlined>
              <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
            </Box>
            <Box elevation={0} margin="10px" style={{ padding: "20px" }} outlined>
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  width="200px"
                  height="200px"
                >
                  <g strokeWidth={0} />
                  <g strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    style={{
                      fill: "#c9e8fa",
                    }}
                    d="M15.673 39.278h480.653v433.445H15.673z"
                  />
                  <path
                    style={{
                      fill: "#67bfff",
                    }}
                    d="M0 23.604v464.791h512V23.604zm480.653 433.445H31.347V54.951h449.306z"
                  />
                  <path
                    style={{
                      fill: "#b6e0f7",
                    }}
                    d="M256 39.278h240.327v433.445H256z"
                  />
                  <path
                    style={{
                      fill: "#08f",
                    }}
                    d="M512 23.604v464.792H256v-31.347h224.653V54.951H256V23.604z"
                  />
                  <path
                    style={{
                      fill: "#c9ad91",
                    }}
                    d="M0 23.604h512v87.761H0z"
                  />
                  <path
                    style={{
                      fill: "#b38a65",
                    }}
                    d="M256 23.604h256v87.761H256z"
                  />
                  <path
                    style={{
                      fill: "#8a6746",
                    }}
                    d="M397.646 23.604H512v87.761H397.646z"
                  />
                  <path
                    style={{
                      fill: "#fff",
                    }}
                    d="M421.794 59.037h13.932v13.932h-13.932zm27.105 0h13.932v13.932h-13.932zm27.115 0h13.932v13.932h-13.932z"
                  />
                  <path
                    style={{
                      fill: "#fd7052",
                    }}
                    d="M362.163 283.967c0 58.211-47.188 105.399-105.399 105.399-.251 0-.502 0-.752-.01-28.473-.188-54.251-11.682-73.101-30.208-16.927-16.635-28.264-38.933-30.929-63.843-.397-3.72-.616-7.502-.616-11.337 0-31.587 13.908-59.925 35.913-79.245.24-.209.481-.418.721-.616a105.5 105.5 0 0 1 29.017-17.774 105 105 0 0 1 38.996-7.743c.251-.01.502-.01.752-.01 58.209-.002 105.398 47.175 105.398 105.387"
                  />
                  <path
                    style={{
                      fill: "#ff4f18",
                    }}
                    d="M362.163 283.967c0 58.211-47.188 105.399-105.399 105.399-.251 0-.502 0-.752-.01V178.589c.251-.01.502-.01.752-.01 58.21-.001 105.399 47.176 105.399 105.388"
                  />
                  <path
                    style={{
                      fill: "#fff",
                    }}
                    d="m278.179 284.996 28.139 28.129-22.173 22.172-28.128-28.139-29.602 29.602-22.163-22.173 29.592-29.591-28.129-28.139 22.163-22.162 28.128 28.118.011.01 29.591-29.591 22.162 22.172z"
                  />
                  <path
                    style={{
                      fill: "#d9d8db",
                    }}
                    d="m278.179 284.996 28.139 28.129-22.173 22.172-28.128-28.139-.011.011v-44.356l.011.01 29.591-29.591 22.162 22.172z"
                  />
                </svg>
              </Box>
              <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button size="sm" variant="primary" onClick={this.backToHome}>
                  Back To Home
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
