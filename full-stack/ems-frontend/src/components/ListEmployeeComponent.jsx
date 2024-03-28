import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData = [
        {
            "id": 1,
            "firstName": "Gia Han",
            "lastName": "Huynh",
            "email": "hghaan@gmail.com" 
        },

        {
            "id": 2,
            "firstName": "Gian",
            "lastName": "Nguyen",
            "email": "hghaan1111@gmail.com" 
        },

        {
            "id": 3,
            "firstName": "Han",
            "lastName": "Ngo",
            "email": "hghaan1123@gmail.com" 
        }
    ]

    return (
    <div class="container">
        <h2 class= "text-center">List of Employees</h2>
        <table class= "table table-striped table-bordered">
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
                    dummyData.map(employee => 
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