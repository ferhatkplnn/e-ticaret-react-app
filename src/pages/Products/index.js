import React, { useEffect } from "react";
import { Button, Flex, Grid } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProductList } from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ProductCard from "../../components/ProductCard";
import { useInView } from "react-intersection-observer";

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
  const [ref, inView] = useInView({});

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (status === "pending") return <LoadingSpinner />;

  if (status === "error") return <p>Error: {error.message}</p>;

  return (
    <div>
      <Grid {...gridStyles}>
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((product) => (
              <ProductCard product={product} key={product._id} />
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
      <div ref={ref}>
        {isFetching && !isFetchingNextPage ? "Fetching..." : null}
      </div>
    </div>
  );
}

const gridStyles = {
  mr: "15%",
  ml: "15%",
  templateColumns: {
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    xl: "repeat(3, 1fr)",
  },
  gap: 4,
};

export default Products;
