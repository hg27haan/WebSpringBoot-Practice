import React, {useState} from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    // const dummyData = [
    //     {
    //         "id": 1,
    //         "firstName": "Gia Han",
    //         "lastName": "Huynh",
    //         "email": "hghaan@gmail.com" 
    //     },

    //     {
    //         "id": 2,
    //         "firstName": "Gian",
    //         "lastName": "Nguyen",
    //         "email": "hghaan1111@gmail.com" 
    //     },

    //     {
    //         "id": 3,
    //         "firstName": "Han",
    //         "lastName": "Ngo",
    //         "email": "hghaan1123@gmail.com" 
    //     }
    // ]
    function addNewEmployee(){
        navigator('/add-employee');
    }
    return (
    <div className="container">
        <h2 className= "text-center">List of Employees</h2>
        <button class="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
        <table className= "table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>

            <tbody>
                {
                    employees.map(employee => 
                        <tr key = {employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
    )
}

export default ListEmployeeComponent