import React, {Component} from 'react';
import Button from './Button'

class Table extends Component {
    render = () => {
        const {students, searchTerm, removeStudent, isSearched} = this.props;
        return (
            <div>
                {
                    students.filter(isSearched(searchTerm)).map(student =>  {
                        return (<div id={student.id} key={student.id}>
                            <b>Name:</b> <span>{student.firstName} {student.lastName} and </span>
                            <b>Age:</b> <span>{student.age} </span>
                            <Button onClick={() => removeStudent(student.id)}>Remove</Button>
                        </div>)
                    })
                }
            </div>
        )
    }
}

export default Table;