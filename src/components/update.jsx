import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Form , Button , Checkbox } from 'semantic-ui-react'


export default function Update() {
let navigate = useNavigate();
const [name , setFullName] = useState()
const [age , setAge] = useState(null)
const [checkbox , setcheckBox] = useState(false)

var id = localStorage.getItem('dataId')

const updateData = () =>{
  axios.put(`https://62329eb28364d63035c03e41.mockapi.io/posts/${id}` , {name , age ,checkbox})
  .then(() => alert("your Data has been updated"))
  .then(() => navigate('/'))
}



    return (
        <div>
              <Form className='create-form'>
    <Form.Field>
        <label>Change Full Name</label>
        <input placeholder='Full Name' onChange={((e) => setFullName(e.target.value))} />
    </Form.Field>
    <Form.Field>
        <label>Change Age</label>
        <input placeholder='Age' onChange={((e) => setAge(e.target.value))}/>
    </Form.Field>
    <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' onChange={(() => setcheckBox(!checkbox))}/>
    </Form.Field>
    <Button type='submit' onClick={updateData}>Upadate</Button>
    <Link to="/">
    <Button type='submit'>See Data</Button>
    </Link>
</Form>
        </div>
    )
}