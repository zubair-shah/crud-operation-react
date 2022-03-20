import React, {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const Create = () => {

const [name , setFullName] = useState();
const [age , setAge] = useState(null);
const [checkbox , setcheckBox] = useState(false);

 const postData = () =>{
     axios.post('https://62329eb28364d63035c03e41.mockapi.io/posts',{
        name,
        age,
        checkbox

     })
     .then(() =>{
         alert("post created Successfully")
     })
    console.log(name)
    console.log(age)
    console.log(checkbox)
}



return(
    <div>

   
    <Form className='create-form'>
    <Form.Field>
        <label>Full Name</label>
        <input placeholder='Full Name' onChange={((e) => setFullName(e.target.value))} />
    </Form.Field>
    <Form.Field>
        <label>Age</label>
        <input placeholder='Age' onChange={((e) => setAge(e.target.value))}/>
    </Form.Field>
    <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' onChange={((e) => setcheckBox(!checkbox))}/>
    </Form.Field>
    <Button type='submit' onClick={postData}>Submit</Button>
    <Link to="/">
    <Button type='submit'>See Data</Button>
    </Link>
</Form>


</div>
)

   
}
export default Create;