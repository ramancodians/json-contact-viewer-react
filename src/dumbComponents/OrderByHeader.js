import React from "react"

const Cell = ({ name}) => (
  <span>
    {name}
  </span>
)

const ORDER_TYPES = [
  { name: "Name"},
  { name: "Email"},
  { name: "Agency"},
]

const OrderByHeader = () => (
  <div className="row sort">
    <span>S/n.</span>
    {ORDER_TYPES.map(item => (
      <Cell
        key={item.name}
        name={item.name}
      />
    ))}
  </div>
)

export default OrderByHeader
