import React, {  Component, Fragment } from "react";
    import Filters from './Filter'
    import { withRouter } from "react-router";  
    
    class Table extends Component
    {
      constructor(props) {
        super(props);
        this.state = {
          headers: this.props.headers,
          data: this.props.data,
          filters:this.props.filters,
          sort: {
            column: "",
            direction: "sorting_asc",
            sortname: ""
          },
          isFilterData :  this.props.data,
          isFilters: true,
          isLoaded: false
        };
      }
    
      // static getDerivedStateFromProps(newProps, currentState) {
      //   if (newProps.data !== currentState.data) {
      //     return {
      //       data: newProps.data
      //     };
      //   }
      //   return null;
      // }
    
      //SORTING FUNCTIONALITY
      onSort = (event, sortKey, isSort) => {
        const sortData = this.state.data;
        let tableSort = this.state.sort;
        if (isSort) {
          if (
            tableSort.column &&
            tableSort.column === sortKey &&
            tableSort.direction === "sorting_asc"
          ) {
            tableSort = {
              column: sortKey,
              direction: "sorting_desc",
              sortname: "descending"
            };
            sortData.sort((b, a) => a[sortKey].localeCompare(b[sortKey]));
          } else {
            tableSort = {
              column: sortKey,
              direction: "sorting_asc",
              sortname: "ascending"
            };
            sortData.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
          }
        }
        this.setState({ data: sortData, sort: tableSort });
      };
    
    
      onFilterChange = (val) => {
        console.log(typeof val.length)
        const filters = val;
        
    
       const filteredData = [];
       if(val.length !== 0){
        for (let i = 0; i < this.state.data.length; i++) {
          for (let j = 0; j < filters.length; j++) {
            for (let k = 0; k < filters[j].values.length; k++) {              
              if (this.state.data[i][filters[j].key] === filters[j].values[k]) {
                filteredData.push(this.state.data[i]);
              }
            }
          }
       }
       this.setState({data: filteredData })
      }else{
        this.setState({data: this.state.isFilterData})
      }
       
      }
    
      /// @@@@@@@@ RENDERS ....................
    
      render() {
        const loadSize = this.state.isLoaded
          ? this.state.data.length
          : this.props.defaultRowDisplay;
        
        return (
          <Fragment>
              <div>
              <div>
                <button className="button btn primary"
                  onClick={() => {
                  this.setState({isFilters: !this.state.isFilters});
                }}>
                  <span className="icon-filter" />
                    Filters
              </button>
               {this.state.isFilters && 
                   <Filters filterChange={this.onFilterChange} filteredData={this.state.isFilterData} />
                } 
              </div>
                <div className="table.search" />
                <div className="table.records text-right">
                Displaying {loadSize}/{this.state.data.length} Claims
              </div>
              </div>
            <table
              aria-labelledby={this.props.id}
              className="dataTable table"
            >
              <thead>
                <tr>
                  {this.state.headers.map((item, index) => {
                    let classname;
                    let sortname;
                    if (item.sort) {
                      classname= 'sorting';
                      if (
                        this.state.sort.column &&
                        this.state.sort.column === item.key
                      ) {
                        classname = this.state.sort.direction;
                      }
                      sortname = "none";
                      if (
                        this.state.sort.column &&
                        this.state.sort.column === item.key
                      ) {
                        sortname = this.state.sort.sortname;
                      }
                    }
    
                    return (
                      <th
                        className={classname}
                        rowSpan="1"
                        colSpan="1"
                        key={index}
                        onClick={e => this.onSort(e, item.key, item.sort)}
                        aria-sort={sortname}
                      >
                        <button className="button btn naked" aria-controls={this.props.id}>
                          {item.name}
                        </button>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {this.state.data &&
                  this.state.data.slice(0, loadSize).map((rowData, index) => (
                    <tr key={index} data-item={rowData}>
                      {Object.keys(rowData).map((key, index) => (
                        <td key={index} data-title={rowData[key]}>
                          {rowData[key]}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
            {!this.state.isLoaded &&
              this.state.data.length > this.props.defaultRowDisplay && (
                <div className="text-center">
                  <button
                    type="button"
                    className="button secondary btn btn-secondary"
                    onClick={() => this.setState({ isLoaded: true })}
                  >
                    View More CLiams
                  </button>
                </div>
              )}
          </Fragment>
        );
      }
    
    }
    
    
    export default Table;
    