import styled from "@emotion/styled";

import * as Colors from "style/colors";

const StyledListWrapper = styled.ul({
  listStyle: "none",
  display: "flex",
  padding: 0,
});

const StyledListItem = styled.li(({ isSelected }: { isSelected: boolean }) => ({
  border: `1px solid ${isSelected ? Colors.Primary : Colors.DarkGrey}`,
  width: "15px",
  textAlign: "center",
  padding: 5,
  cursor: "pointer",
  color: isSelected ? Colors.Primary : Colors.DarkGrey,
}));

const Pagination = ({
  reviewsPerPage,
  totalReviews,
  currentPage,
  paginate,
}: {
  reviewsPerPage: number;
  totalReviews: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledListWrapper>
      {pageNumbers.map((number) => (
        <StyledListItem
          key={number}
          onClick={() => {
            paginate(number);
          }}
          isSelected={currentPage === number}
        >
          {number}
        </StyledListItem>
      ))}
    </StyledListWrapper>
  );
};

export { Pagination };
