import React from 'react';
import { useState , useEffect } from 'react';
import { Button, Table } from 'semantic-ui-react'
import { Link , useNavigate } from "react-router-dom"
import axios from 'axios'




export default function Read() {
    const [ApiData , setApiData] = useState([]);
    const baseURL = 'https://62329eb28364d63035c03e41.mockapi.io/posts';

    const setData = (data) =>{
        console.log(data)
    }

    useEffect(() => {
      axios.get(`${baseURL}`)
      .then((response) => {
          setApiData(response.data)
        
      })

     
    
      
    }, [])
    console.log(ApiData)

const deleteData = (id) =>{
    axios.delete(`${baseURL}/${id}`)
    .then(() => {
         getData()
    })
}

const getData = () => {
    axios.get(`${baseURL}`)
    .then((response) => {
        setApiData(response.data)
    })
   
}

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                <Link to="/create">
                        <Button >Create</Button>
                        </Link>
                    <Table.Row>
                       
                   
                    <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Full Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell >Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                   {ApiData.map((data) => {
                       return(
                        <Table.Row>
                        <Table.Cell>{data.id}</Table.Cell>
                        <Table.Cell>{data.name}</Table.Cell>
                        <Table.Cell>{data.age}</Table.Cell>
                    
                        <Link to="/update">
                        <Table.Cell><Button onClick={() => setData(data)}>Update</Button></Table.Cell>
                        </Link>
                        <Table.Cell><Button onClick={() => deleteData(data.id)}>Delete</Button></Table.Cell>

                    </Table.Row>
                       )
                   })}
                </Table.Body>
            </Table>
        </div>
    )
}