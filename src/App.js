import React, { Component } from 'react'
import List from "react-list"
import DataSetRaw from "./jsonData.json"
import Row from "./dumbComponents/Row"
import SearchBox from "./dumbComponents/SearchBox"
import NoRecordsFound from "./dumbComponents/NoRecordsFound"
import OrderByHeader from "./dumbComponents/OrderByHeader"
import orderBy from "lodash/orderBy"
import "./styles/css/main.css"

class App extends Component {

  state = {
    DataSet: orderBy(DataSetRaw.filter(item => item.firstname), ["firstname", "lastname", "email"], ["asc"]),
  }

  handleSearch = (searchText = "") => {
    const newDataSet = DataSetRaw.filter(
      item => Object.values(item)
      .join("")
      .toLowerCase()
      .includes(searchText.toLowerCase())
    )

    this.setState({
      searchText,
      DataSet: newDataSet,
    })
  }

  render() {
    const { DataSet, searchText } = this.state
    return (
      <div className="App">
        <SearchBox handleSearch={this.handleSearch}/>
        { DataSet.length > 0
          ? (
            <div>
              { searchText &&
                <h6>{DataSet.length} records found for "{searchText}"</h6>
              }
              <OrderByHeader />
              <List
                itemRenderer={(index, key) => (
                  <Row
                    searchText={searchText}
                    index={index}
                    key={key}
                    data={DataSet[index]}
                  />
                )}
                length={DataSet.length}
                pageSize={50}
                type='variable'
                threshold={200}
                useTranslate3d
              />
            </div>
          )
        : <NoRecordsFound searchText={searchText} />
      }
      </div>
    )
  }
}

export default App
