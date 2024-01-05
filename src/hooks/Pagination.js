import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import colors from "../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight, faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = []
    const pagesToShow = 5 // Define quantas páginas visíveis você deseja

    for (
        let i = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
        i <= Math.min(totalPages, currentPage + Math.floor(pagesToShow / 2));
        i++
    ) {
        pageNumbers.push(
            <PageNumber
                key={i}
                onClick={() => onPageChange(i)}
                selected={currentPage === i}
            >
                {i}
            </PageNumber>
        );
    }
    return (
        <PaginationContainer>
            <NavigationButton onClick={() => onPageChange(1)}>
                <FontAwesomeIcon icon={faAnglesLeft} />
            </NavigationButton>
            <NavigationButton
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            >
                <FontAwesomeIcon icon={faCircleChevronLeft} />
            </NavigationButton>
            {pageNumbers}
            <NavigationButton
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            >
                <FontAwesomeIcon icon={faCircleChevronRight} />
            </NavigationButton>
            <NavigationButton onClick={() => onPageChange(totalPages)}>
                <FontAwesomeIcon icon={faAnglesRight} />
            </NavigationButton>
        </PaginationContainer>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  width: 70vw;
`;
export const PageNumber = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ selected }) => (selected ? `${colors.blue}` : `${colors.black}`)};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  border: ${({ selected }) => (selected ? `1px solid ${colors.blue}` : `none`)};
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    color: ${colors.blue};
  }
`;
export const PageLabel = styled.span`
  margin-right: 5px;
  font-weight: 600;
`;
export const NavigationButton = styled.div`
  margin: 5px;
&:hover {
 cursor: pointer;
  color: ${colors.blue};
}
`;
