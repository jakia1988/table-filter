import React, { PureComponent } from 'react';
import '../assets/css/style.css';

const data = require('../db/data.json')
class App extends PureComponent {  
  constructor(props) {
    super(props);
    this.state = {
      filters: []
    };
  }
  
  changeFilter (e, key, value) {
    const filtersToSet = this.state.filters;
    const filterSet = new Set(filtersToSet[key]);
    
    if (e.target.checked) {
      filterSet.add(value);
    } else {
      filterSet.delete(value);
    }
    filtersToSet[key] = filterSet;

    this.setState({ filters: filtersToSet }); 
    console.log(this.state.filters['servicetype'])
    
    
  }
  render() {
    const db = data.claimsList;
    console.log('database',data)
    const receiveddate = [...new Set(db.map(item =>item.receiveddate))]
    const facilityprovider = [...new Set(db.map(item =>item.facilityprovider))]
    const servicetype = [...new Set(db.map(item =>item.servicetype))]
    
  

    return (
      <div className="App">
        <div className="filter">
        <h4>Plan Year</h4>
        <ul className="table-filters-section-content">
          {receiveddate.map((value, i) => (
                        <li key={i}>
                        <label>
                          <input
                            type="checkbox"
                            name={value}   
                            onChange={(e) => this.changeFilter(e, 'receiveddate', value)}                       
                          />{' '}
                          {value}
                          </label>
                          
              </li>
          ))}
        </ul>
        <hr/>
        <h4>Plan Types</h4>
        <ul className="table-filters-section-content">
          {facilityprovider.map((value, i) => (
                         <li key={i}>
                          <label>
                            <input
                              type="checkbox"
                              name={value}   
                              onChange={(e) => this.changeFilter(e, 'facilityprovider', value)}                              
                            />{' '}
                            {value}
                         </label>
              </li>
          ))}
        </ul>
        <hr/>
        <h4>Providers</h4>
        <ul className="table-filters-section-content">
          {servicetype.map((value, i) => (
                        <li key={i}>
                        <label>
                         {value}
                          <input
                            type="checkbox"
                            onChange={(e) => this.changeFilter(e, 'servicetype', value)} 
                            name={value}                          
                          />{' '}
                          </label>
                         
              </li>
          ))}
        </ul>
        
       <a href="javascript:;">Apply Filter</a>
        </div>
      </div>
    );
  }

 

}

export default App;
