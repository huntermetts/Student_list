import { Route } from "react-router-dom"
import React, { Component } from "react"
import StudentManager from "../modules/StudentManager"
import StudentList from './students/StudentList'

export default class ApplicationViews extends Component {
    state = {
        students: []
    }

    componentDidMount() {
        // Chaining fetch methods from AnimalManager
        StudentManager.getAllStudents().then(allStudents => {
            this.setState({
                students: allStudents
            })
        })
    }


    render() {
        return (
            <React.Fragment>
                <Route exact path="/students" render={(props) => {
                        return <StudentList {...props}
                       students={this.state.students} />

                }} />
            </React.Fragment>
        )
    }
}