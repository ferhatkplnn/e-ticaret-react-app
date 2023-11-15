import React from "react";
import Card from "../../components/Card";
import { Button, Flex, Grid } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProductList } from "../../api";

function Products() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProductList,
    initialPageParam: 0,
    getNextPageParam: (lastGroup, allGroup) => {
      const morePagesExist = lastGroup?.length === 12;

      if (!morePagesExist) return;

      return allGroup.length + 1;
    },
  });

  if (status === "pending") return <p>Loading ...</p>;

  if (status === "error") return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <div>
      <Grid {...gridStyles}>
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((product) => (
              <Card product={product} key={product._id} />
            ))}
          </React.Fragment>
        ))}
      </Grid>
      <Flex mt="10" justifyContent="center">
        <Button
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          isDisabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more ..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
      </Flex>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
}

const gridStyles = {
  mr: "15%",
  ml: "15%",
  templateColumns: {
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
  },
  gap: 4,
};

export default Products;
