import axios from "axios";
import "./App.css";

import Typography from "@mui/material/Typography";
import { Box, Button, Paper } from "@mui/material";
import React from "react";

type typeAdvice = { advice: string };

class App extends React.Component {
  state: typeAdvice = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = (): void => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <Box className="container">
          <Paper elevation={12} className="paper" square={false}>
            <Typography variant="h4" className="advice">
              {this.state.advice}
            </Typography>
            <Button
              sx={{
                margin: "20px",
                borderRadius: "20px",
                backgroundColor: "white",
                ":hover": {
                  background:
                    "linear-Gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  color: "white",
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                },
              }}
              variant="outlined"
              size="large"
              className="button"
              onClick={this.fetchAdvice}
            >
              Get Advice
            </Button>
          </Paper>
        </Box>
      </>
    );
  }
}

export default App;
