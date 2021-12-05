//import Member from "../pages/member";
import React from "react"

class MemberTb extends React.Component {
    state = {
        id: '',
        name: '',
        email: '',
        adress: '',
        phone: ''
    };
    render() {
        return ( <
            Table data = {
                dataTable.dataRows.map((prop, key) => {
                    return {
                        id: key,
                        name: prop[0],
                        email: prop[1],
                        adress: prop[2],
                        phone: prop[3],
                        actions: (
                            // we've added some custom button actions
                            <
                            div className = "actions-right" > { /* use this button to add a like kind of action */ } <
                            Button justIcon round simple onClick = {
                                () =>
                                alert("You've pressed the like button on colmun id: " + key)
                            }
                            color = "info"
                            className = "like" >
                            <
                            Favorite / >
                            <
                            /Button>{" "} { /* use this button to add a edit kind of action */ } <
                            Button justIcon round simple onClick = {
                                () =>
                                alert("You've pressed the edit button on colmun id: " + key)
                            }
                            color = "warning"
                            className = "edit" >
                            <
                            Dvr / >
                            <
                            /Button>{" "} { /* use this button to remove the data row */ } <
                            Button justIcon round simple onClick = {
                                () =>
                                alert(
                                    "You've pressed the delete button on colmun id: " + key
                                )
                            }
                            color = "danger"
                            className = "remove" >
                            <
                            Close / >
                            <
                            /Button>{" "} <
                            /div>
                        )
                    };
                })
            }
            columns = {
                [{
                        Header: "Id",
                        accessor: "id"
                    },
                    {
                        Header: "Name",
                        accessor: "name"
                    },
                    {
                        Header: "Email",
                        accessor: "email"
                    },
                    {
                        Header: "Adress",
                        accessor: "adress"
                    },
                    {
                        Header: "Phone",
                        accessor: "phone",
                    }
                ]
            }
            />
        );
    }
}
export default MemberTb;