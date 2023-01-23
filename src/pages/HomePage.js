import React from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    text: {
      paddingTop: "10rem",
      color: "red",
    },
  };
});

function HomePage() {
  const { classes } = useStyles();
  return (
    <div>
      <h1 className={classes.text}>Hello</h1>
    </div>
  );
}

export default HomePage;
