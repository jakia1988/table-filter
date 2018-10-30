import React, { Component, Fragment } from "react";

import { withRouter } from "react-router";
const filterToSet = [];
class Filters extends Component {
  constructor(props) {
    super(props);
    console.log("www1", this.props.filteredData);
    this.state = {
      filterData: this.props.filteredData,
      filters: [],
      newfilter : []
    };
  }

  componentDidMount() {
     
  }

  changeFilter(e, key, value) {
   const filtersToSet = this.state.filters; 
//     if (e.target.checked) { 
//       if(filtersToSet.length === 0){
//         filtersToSet.push({[key]:[value]})
//       }else
//       {
//         for(var i=0; i<filtersToSet.length;i++){   
//           if(filtersToSet[i].hasOwnProperty(key)){ 
//                 filtersToSet[i][key].push(value)
//         }else{
//             filtersToSet.push({[key]:[value]})
//           }
//         }
      
//     }
//   }
//  var unique =  filtersToSet.filter(function(item, pos) {
//       return filtersToSet.indexOf(item) == pos;
//   })
    
    
    
     const filterSet = new Set(filtersToSet[key]);
    
     if (e.target.checked) {
       filterSet.add(value);
     } else {
       filterSet.delete(value);
     }
    filtersToSet[key] = filterSet;
     
    
    let arrayOfSkills = Array.from(filterSet);
    let temp ={
      'key': key , 'values': arrayOfSkills
    }
    for(var i=0;i<filterToSet.length;i++){
      if(filterToSet[i]['key'] === key){
        filterToSet.splice(filterToSet.findIndex(function(i){
            return i.key === key;
        }), 1);
      }
    }
    
    filterToSet.push(temp);     
    if(filterToSet[0].values.length===0){
      filterToSet.length=0;
    }

  }
  

  render() {   
    
    const filterData = [
        {'name':'Plan Name', 'id':'receiveddate', 'data':[...new Set(this.props.filteredData.map(item => item.receiveddate))]},
        {'name':'Facility/Provider','id':'facilityprovider', 'data':[...new Set(this.props.filteredData.map(item => item.facilityprovider))]},
        {'name':'Service Type','id':'servicetype', 'data':[...new Set(this.props.filteredData.map(item => item.servicetype))]}
    ]
    return (
      <Fragment>
        <div className="table-filters">
          {filterData.map((value, i) => (
               <div key={i} className="table-filters-section">   
              <div  className='table-filters-section-heading'>{value.name}</div>  
               <ul>{value.data.map((x,ikey)=>
                    <li key={ikey}>
                    <label>
                        <input
                        type="checkbox"
                        name={x}
                        onChange={e => this.changeFilter(e, value.id, x)}
                        />{" "}
                        {x}
                    </label>
                    </li>                    
                    )}
                </ul>    
              </div>                    
              ))}
               
          <button onClick={() => this.props.filterChange(filterToSet)}>
            {" "}
            Apply Filters
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Filters;
