import React from "react";
import Card from "../../components/Card";
import { Grid } from "@chakra-ui/react";

function Products() {
  return (
    <div>
      <Grid mr="15%" ml="15%" templateColumns="repeat(3, 1fr)" gap={4}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  );
}

export default Products;
