import { Typography, Wrapper } from "@/components/atoms";

export default function SearchPage() {
  return (
    <>
      <Typography element="h1" variant="title-1">Catalog</Typography>
      <Typography>Search your preferred cupcakes by filtering, sorting, or searching by its name</Typography>
      
      <Wrapper id="controls" className="grid gap-12 mt-12">
        <Wrapper id="sort" className="grid gap-4">
          <Typography element="h2" variant="title-5">Order by:</Typography>
          <Wrapper id="sortOptions" className="flex gap-4">
            <Typography>Category</Typography>
            <Typography>Lowest Price</Typography>
            <Typography>Highest Price</Typography>
          </Wrapper>
        </Wrapper>

        <Wrapper id="filter" className="grid gap-4">
          <Typography element="h2" variant="title-5">Filter by:</Typography>
          <Wrapper id="filterOptions" className="flex gap-10">
            <Wrapper id="size" className="grid gap-4">
              <Typography variant="subheader">Size</Typography>
              <Typography>Mini</Typography>
              <Typography>Regular</Typography>
              <Typography>Jumbo</Typography>
            </Wrapper>
            
            <Wrapper id="availability" className="grid gap-4">
              <Typography variant="subheader">Availability</Typography>
              <Typography>Regular</Typography>
              <Typography>Seasonal</Typography>
              <Typography>Limited Edition</Typography>
            </Wrapper>
            
            <Wrapper id="stock" className="grid gap-4 content-start">
              <Typography variant="subheader">Stock</Typography>
              <Typography>In stock</Typography>
              <Typography>Tell me when available</Typography>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  )
}
