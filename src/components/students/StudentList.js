import React, { Component } from 'react'
// import dog from "./DogIcon.png"
// import "./Animal.css"
// import { Link } from "react-router-dom";
// import AnimalCard from "./AnimalCard"

export default class StudentList extends Component {
    render () {
        return (
            <React.Fragment>
                <h3>These are the students:</h3>
                {
                this.props.students.map(student =>
          <div key={student.id}>
                <div className="card-body">
                    <h5 className="card-title">
                        {student.firstName}<br></br>
                        {student.lastName}
                    </h5>
                </div>
            </div>
                )}
            </React.Fragment>
        )
    }
}