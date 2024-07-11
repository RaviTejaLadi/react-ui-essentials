import React, { useState, useCallback, useMemo } from "react";

const UseFilteredContent = (data, CardsPerPage) => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    return data?.filter((item) =>
      Object?.values(item ?? "")?.some((val) =>
        val?.toString()?.toLowerCase()?.includes(debouncedSearchTerm?.toLowerCase())
      )
    );
  }, [data, debouncedSearchTerm]);

  const totalPages = Math?.ceil(filteredData?.length / CardsPerPage);
  const indexOfLastItem = currentPage * CardsPerPage;
  const indexOfFirstItem = indexOfLastItem - CardsPerPage;
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

  return {
    searchStates: {
      debouncedSearchTerm: debouncedSearchTerm,
      setDebouncedSearchTerm: setDebouncedSearchTerm,
      highlightSearchTerm: highlightSearchTerm,
    },
    PaginationStates: {
      totalPages,
      setCurrentPage,
      currentPage,
    },
    cardData: currentItems,
  };
};

export default UseFilteredContent;
