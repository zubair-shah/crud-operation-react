import React from 'react';
import { useState , useEffect} from 'react';
import { Button, Table } from 'semantic-ui-react'
import { Link } from "react-router-dom"

import axios from 'axios'
export default function Read() {

    const [ApiData , setApiData] = useState([]);
    const baseURL = 'https://62329eb28364d63035c03e41.mockapi.io/posts';

    const setData = (data) =>{
        console.log(data)
    }

    useEffect(() => {
      axios.get('https://62329eb28364d63035c03e41.mockapi.io/posts')
      .then((response) => {
         
          setApiData(response.data)
      })

     
    
      
    }, [])
    console.log(ApiData)



    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Full Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Created At</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                   {ApiData.map((data) => {
                       return(
                        <Table.Row>
                        <Table.Cell>{data.id}</Table.Cell>
                        <Table.Cell>{data.name}</Table.Cell>
                        <Table.Cell>{data.age}</Table.Cell>
                        <Table.Cell>{data.createAt}</Table.Cell>
                        <Link to="/update">
                        <Table.Cell><Button onClick={() => setData(data)}>Update</Button></Table.Cell>
                        </Link>
                    </Table.Row>
                       )
                   })}
                </Table.Body>
            </Table>
        </div>
    )
}