import React from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";

const layout = props => (
  <Aux>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
