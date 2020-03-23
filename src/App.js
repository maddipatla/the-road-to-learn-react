import React, { Component } from 'react';
import './App.css';
// import Search from './Search'
// import Table from './Table'

const students = [{"id": 1010,
                    "firstName": "Maddipatla",
                    "lastName": "Chandra Babu",
                    "age": 28},
                    {"id": 1011,
                    "firstName": "Gudi",
                    "lastName": "Ram",
                    "age": 18},
                    {"id": 1012,
                    "firstName": "Basani",
                    "lastName": "Revathi",
                    "age": 38},
                    {"id": 1013,
                    "firstName": "Dasari",
                    "lastName": "Lakshmi",
                    "age": 32},
                    {"id": 1014,
                    "firstName": "Racha",
                    "lastName": "Ramesh",
                    "age": 38}];

const isSearched = searchTerm => student => student.firstName.toLowerCase().includes(searchTerm.toLowerCase());


//ES6 Class component
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      students,
      searchTerm: ''
    };

    this.removeStudent = this.removeStudent.bind(this);
    this.logMessage = this.logMessage.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.firstNameSearchResults = this.firstNameSearchResults.bind(this);
  }

  render = () => {
    const {searchTerm, students} = this.state;
    return (
      <div className="page">
        <div className="interactions">
          <Search searchTerm={searchTerm} onChange={this.onSearchChange}>Search with FirstName:</Search>
        </div>
        <hr/>
        <Table students={students} searchTerm={searchTerm} removeStudent={this.removeStudent}/>
      </div>
    );
  }

  firstNameSearchResults = () => {
    const {searchTerm, students} = this.state;
    const firstNameIncludes = student => {
      if(searchTerm !== '') {
        return student.firstName.includes(searchTerm);
      } else {
        return true;
      }
    };
    return students.filter(firstNameIncludes);
    
  }

  onSearchChange = event => {
    this.setState({searchTerm: event.target.value});
  }

  removeStudent = id => {
    const isNotId = student => student.id !== id;
    const filteredStudents = this.state.students.filter(isNotId);
    this.setState({students: filteredStudents})
  }

  logMessage = () => {
    console.log("LOGGED");
  }

}

//Functional Stateless Component
const Search = ({searchTerm, onChange, children}) => {
  return (
    <form>
        {children} <input type="text" value={searchTerm} onChange={onChange}/>
    </form>
  );
}

//Functional Stateless Component
const Table = ({students, searchTerm, removeStudent}) => {
  return (
    <div className="table">
        {
            students.filter(isSearched(searchTerm)).map(student =>  {
                return (<div id={student.id} key={student.id} className="table-row">
                     <span style={{width: '40%'}}><b>Name:</b> {student.firstName} {student.lastName} </span>
                     <span style={{width: '40%'}}><b>Age:</b> {student.age} </span>
                     <span style={{width: '20%'}}><Button onClick={() => removeStudent(student.id)} className="button-inline">Remove</Button></span>
                </div>)
            })
        }
    </div>
)
}

//Functional Stateless Component
const Button = ({onClick, className = "Red", children}) => {
  return(
    <button type="button" onClick={onClick} className={className}>{children}</button>
  );
}

export default App;
