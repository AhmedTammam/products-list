import { useState } from "react";
import styled from "@emotion/styled";

import { Pagination } from "pages/products-list/components/product-details/reviews/pagination";
import * as Colors from "style/colors";
import { sortReviews } from "store/slices/product-slice";
import { useAppDispatch } from "helpers/store-hooks";
import type { Product } from "types/product";

const StyledReviewsWrapper = styled.div({
  border: `1px solid ${Colors.DarkGrey}`,
  borderRadius: 5,
  textAlign: "left",
});

const StyledSelect = styled.select({
  fontSize: 16,
  color: "grey",
  padding: 10,
  border: "2px solid #ccc",
  boxSizing: "border-box",
});

const StyledReviewItem = styled.div({
  display: "flex",
  margin: 20,
  alignItems: "center",
  paddingBottom: 10,
  borderBottom: `1px solid ${Colors.DarkGrey}`,
});

const StyledReviewItemScore = styled.p({
  fontSize: 18,
  border: `1px solid ${Colors.DarkGrey}`,
  minWidth: 60,
  height: 60,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const StyledReviewItemContent = styled.p({
  marginLeft: 20,
  textAlign: "left",
});

const StyledPaginationWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Reviews = ({ reviews }: { reviews: Product["reviews"] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(2);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews?.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const dispatch = useAppDispatch();

  console.log(indexOfLastReview);
  if (!reviews?.length) return null;

  return (
    <StyledReviewsWrapper>
      <StyledSelect onChange={(e) => dispatch(sortReviews(e.target.value))}>
        <option disabled>Sort By</option>
        <option value="high-score">high score</option>
        <option value="low-score">low score</option>
      </StyledSelect>
      <div>
        {currentReviews?.map((review) => (
          <StyledReviewItem key={review.review}>
            <StyledReviewItemScore>{review.score}</StyledReviewItemScore>
            <StyledReviewItemContent>{review.review}</StyledReviewItemContent>
          </StyledReviewItem>
        ))}
        <StyledPaginationWrapper>
          <Pagination
            reviewsPerPage={reviewsPerPage}
            totalReviews={reviews?.length || 0}
            currentPage={currentPage}
            paginate={paginate}
          />
        </StyledPaginationWrapper>
      </div>
    </StyledReviewsWrapper>
  );
};

export { Reviews };
