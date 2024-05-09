import React, { useCallback, useMemo, useState } from "react";
import data from "./searchData.json";
import SearchComponent from "./SearchBar";
import CustomButton from "../Button/CustomButton";

const Page = () => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(21);

  const filteredData = useMemo(() => {
    return data?.filter((item) =>
      Object?.values(item ?? "")?.some((val) =>
        val?.toString()?.toLowerCase()?.includes(debouncedSearchTerm?.toLowerCase())
      )
    );
  }, [data, debouncedSearchTerm]);

  const totalPages = Math?.ceil(filteredData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

  const highlightSearchTerm = useCallback(
    (text, searchTerm) => {
      const parts = text?.split(new RegExp(`(${searchTerm})`, "gi"));
      return (
        <span>
          {parts?.map((part, index) =>
            part?.toLowerCase() === searchTerm?.toLowerCase() ? (
              <span
                style={{
                  backgroundColor: "yellow",
                  borderRadius: "4px",
                }}
                key={index}
              >
                {part}
              </span>
            ) : (
              part
            )
          )}
        </span>
      );
    },
    [debouncedSearchTerm]
  );

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;
    const middlePageNumber = Math.floor(maxPageNumbersToShow / 2);
    let startPageNumber = currentPage - middlePageNumber;
    let endPageNumber = currentPage + middlePageNumber;

    if (startPageNumber <= 0) {
      startPageNumber = 1;
      endPageNumber = maxPageNumbersToShow;
    }

    if (endPageNumber > totalPages) {
      endPageNumber = totalPages;
      startPageNumber = totalPages - maxPageNumbersToShow + 1;
      if (startPageNumber <= 0) {
        startPageNumber = 1;
      }
    }

    for (let i = startPageNumber; i <= endPageNumber; i++) {
      pageNumbers.push(
        <CustomButton variant={i === currentPage ? "info" : "dark"} size="sm" key={i} onClick={() => setCurrentPage(i)}>
          {i}
        </CustomButton>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <SearchComponent setDebouncedSearchTerm={setDebouncedSearchTerm} />
      <div className="card-container">
        {currentItems.map((item, index) => (
          <div key={index} className="card">
            <img src={item.Image} alt={`${item.first_name} ${item.last_name}`} />
            <h2>
              {highlightSearchTerm(item.first_name, debouncedSearchTerm)}
              {highlightSearchTerm(item.last_name, debouncedSearchTerm)}
            </h2>
            <p>{highlightSearchTerm(item.email, debouncedSearchTerm)}</p>
            <p>{highlightSearchTerm(item.gender, debouncedSearchTerm)}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <CustomButton variant="dark" size="sm" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
          First
        </CustomButton>
        <CustomButton
          variant="dark"
          size="sm"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </CustomButton>
        {renderPageNumbers()}
        <CustomButton
          variant="dark"
          size="sm"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </CustomButton>
        <CustomButton
          variant="dark"
          size="sm"
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last
        </CustomButton>
      </div>
    </div>
  );
};

export default Page;
