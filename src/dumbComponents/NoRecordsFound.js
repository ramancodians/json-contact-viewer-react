import React from "react"

const NoRecordsFound = ({searchText}) => (
  <div className="no-records-found">
    <h1>Oops! No record found that <strong>"{searchText}"</strong></h1>
  </div>
)

export default NoRecordsFound
