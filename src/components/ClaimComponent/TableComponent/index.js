import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import Table from "./Table";

class Claims extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          receiveddate: "10/01/2018",
          facilityprovider: "Jacksonville Va Specialty Clinic",
          servicetype: "Health",
          status: "Processed",
          claimcharge: "$2.49",
          yourcost: "$2.49",
          showdetails: "Show Details"
        },
        {
          receiveddate: "10/09/2018",
          facilityprovider: "CVS",
          servicetype: "Pharmacy",
          status: "Denied",
          claimcharge: "$2.49",
          yourcost: "$2.49",
          showdetails: "Show Details"
        },
        {
          receiveddate: "09/01/2018",
          facilityprovider: "Life Care Center of Jacksonville",
          servicetype: "Dental",
          status: "Processed",
          claimcharge: "$2.49",
          yourcost: "$2.49",
          showdetails: "Show Details"
        },
        {
          receiveddate: "09/27/2018",
          facilityprovider: "CVS #232",
          servicetype: "Health",
          status: "Processed",
          claimcharge: "$2.49",
          yourcost: "$2.49",
          showdetails: "Show Details"
        },
        {
          receiveddate: "08/25/2018",
          facilityprovider: "CVS #231",
          servicetype: "Dental",
          status: "Denied",
          claimcharge: "$2.49",
          yourcost: "$2.49",
          showdetails: "Show Details"
        },
        {
          receiveddate: "10/09/2018",
          facilityprovider: "CVS #232",
          servicetype: "Health",
          status: "Processed",
          claimcharge: "$2.49",
          yourcost: "$2.49",
          showdetails: "Show Details"
        },
        {
          receiveddate: "10/09/2018",
          facilityprovider: "CVS #232",
          servicetype: "Pharmacy",
          status: "Processed",
          claimcharge: "$2.49",
          yourcost: "$6.49",
          showdetails: "Show Details"
        },
        {
          receiveddate: "10/09/2018",
          facilityprovider: "CVS #232",
          servicetype: "Dental",
          status: "Denied",
          claimcharge: "$2.49",
          yourcost: "$8.49",
          showdetails: "Ahow Details"
        },
        {
          receiveddate: "10/09/2018",
          facilityprovider: "CVS #232",
          servicetype: "Health",
          status: "Denied",
          claimcharge: "$2.49",
          yourcost: "$22.49",
          showdetails: "Show Details"
        },
        {
          receiveddate: "10/09/2018",
          facilityprovider: "CVS #232",
          servicetype: "Dental",
          status: "Processed",
          claimcharge: "$2.49",
          yourcost: "$12.49",
          showdetails: "Show Details"
        },
        {
          receiveddate: "10/09/2018",
          facilityprovider: "CVS #232",
          servicetype: "Pharmacy",
          status: "Denied",
          claimcharge: "$2.49",
          yourcost: "$62.49",
          showdetails: "Show Details"
        },
        {
          receiveddate: "10/09/2018",
          facilityprovider: "CVS #232",
          servicetype: "Health",
          status: "Processed",
          claimcharge: "$2.49",
          yourcost: "$42.49",
          showdetails: "Show Details"
        },
        {
          receiveddate: "10/09/2018",
          facilityprovider: "CVS #232",
          servicetype: "Pharmacy",
          status: "Denied",
          claimcharge: "$2.49",
          yourcost: "$22.49",
          showdetails: "Show Details"
        },
        {
          receiveddate: "10/09/2018",
          facilityprovider: "CVS #232",
          servicetype: "Dental",
          status: "Processed",
          claimcharge: "$2.49",
          yourcost: "$10.49",
          showdetails: "Show Details"
        },
        {
          receiveddate: "10/09/2018",
          facilityprovider: "CVS #232",
          servicetype: "Health",
          status: "Denied",
          claimcharge: "$2.49",
          yourcost: "$12.49",
          showdetails: "Show Details"
        }
      ],
      filters:[
        {
          name: 'Facility Provider',
          key: 'facilityprovider',
          values: ['CVS #232', 'Life Care Center of Jacksonville']
        },
        
      ]
    };
  }

  /// @@@@@@@@ RENDERS ....................

  render() {
    const columns =[
        {
          name: "Service",
          key: "service",
          sort: true,
        },
        {
          name: "Facility/Provider",
          key: "facilityprovider",
          sort: true,
        },
        {
          name: "Service Type",
          key: "servicetype",
          sort: true,
        },
        {
          name: "Status",
          key: "status",
          sort: true,
        },
        {
          name: "Claim Charge",
          key: "claimcharge",
          sort: false,
        },
        {
          name: "Your Cost",
          key: "yourcost",
          sort: false,
        },
        {
          name: "Show Details",
          key: "showdetails",
          sort: false,
        }
    ]
    return (
      <Fragment>
        <h1 id="claims">Claims</h1>
        <Table
          data={this.state.data}
          headers={columns}
          defaultRowDisplay={10}
          id="claims"
          sortable={true}
        />
      </Fragment>
    );
  }
}

export default Claims;
