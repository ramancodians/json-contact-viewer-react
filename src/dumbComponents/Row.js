import React from "react"

const wrapTagAroundSearch = (text = "", searchText) => {
  if (!searchText) return text
  const regex = new RegExp(`(${searchText})`, "gi");
  var parts = text.split(regex);
  for (var i = 1; i < parts.length; i += 2) {
    parts[i] = <span key={i}>{parts[i]}</span>;
  }
  return parts
}

const Row = ({ index, data, searchText }) => {
  const { agency_name, email, firstname, lastname } = data
  return (
    <div className="row">
      <span>{index + 1}</span>
      <span>{wrapTagAroundSearch(`${firstname} ${lastname}`, searchText)}</span>
      <span>{wrapTagAroundSearch(email, searchText)}</span>
      <span>{wrapTagAroundSearch(agency_name, searchText)}</span>
    </div>
  )
}

export default Row
