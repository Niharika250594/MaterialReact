import React from "react";
import Grid from "@material-ui/core/Grid";
function Grid1() {
  return (
    <div >
    <Grid container  direction="row">
      <Grid container  justify="center">
      
        
          <Grid item>Home</Grid>
        
        </Grid>
        <Grid container direction="column">
          <Grid item>Services</Grid>
          <Grid item>Software development</Grid>
          <Grid item>Mobile application services</Grid>
          </Grid>
        
      </Grid>
    </div>
  );
}
export default Grid1;
