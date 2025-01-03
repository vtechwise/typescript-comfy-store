import {
  constructUrl,
  ConstructPrevOrNextUrl,
  ProductsResponseWithParams,
} from "@/utils";
import { useLoaderData, useLocation } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

function PaginationContainer() {
  const { meta } = useLoaderData() as ProductsResponseWithParams;
  const { pageCount, page } = meta.pagination;
  const { pathname, search } = useLocation();

  const pages = Array.from({ length: pageCount }, (_, index): number => {
    return index + 1;
  });

  // dont return pagination container when page is one
  if (pageCount < 2) return null;

  // function to create list of pages ui
  const renderPagination = pages.map((pageNumber) => {
    const isActive = pageNumber === page;
    const url = constructUrl({ pageNumber, search, pathname });
    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  });

  const { nextUrl, prevUrl } = ConstructPrevOrNextUrl({
    currentPage: page,
    pathname,
    search,
    pageCount,
  });
  return (
    <Pagination className="mt-16">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl} />
        </PaginationItem>
        {renderPagination}
        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
export default PaginationContainer;
