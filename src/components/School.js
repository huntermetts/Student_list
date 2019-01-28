import React, { Component } from "react"
import ApplicationViews from "./ApplicationViews";

class School extends Component {
    state = {
        students: []
    }


    // // CHECK GITHUB:
    // searchAllData = (searchQuery) => {
    //     const newSearchResults = {}
    //     return SearchManager.searchAnimals(searchQuery)
    //     .then(response => newSearchResults.animals = response)
    //     .then(() => SearchManager.searchEmployees(searchQuery))
    //     .then(response => newSearchResults.employees = response)
    //     .then(() => SearchManager.searchLocations(searchQuery))
    //     .then(response => newSearchResults.locations = response)
    //     .then(() => this.setState(newSearchResults))
    //   }


render() {
    return (
        <React.Fragment>
            {/* <NavBar searchAllData = {this.searchAllData} />
            <ApplicationViews
            animals = {this.state.animals}
            employees= {this.state.employees}
            locations={this.state.locations} /> */}
            <ApplicationViews
            students = {this.state.students} />
        </React.Fragment>
    )
}
}

export default School