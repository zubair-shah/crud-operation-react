import React, {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

const Create = () => {

const [firstName , setFirstName] = useState('');
const [lastName , setLastName] = useState('');
const [checkbox , setcheckBox] = useState(false);

 const postData = () =>{
     axios.post('https://62329eb28364d63035c03e41.mockapi.io/posts' ,{
        firstName,
        lastName,
        checkbox

     })
    console.log(firstName)
    console.log(lastName)
    console.log(checkbox)
}


return(
    <div>

   
    <Form className='create-form'>
    <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' onChange={((e) => setFirstName(e.target.value))} />
    </Form.Field>
    <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' onChange={((e) => setLastName(e.target.value))}/>
    </Form.Field>
    <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' onChange={((e) => setcheckBox(!checkbox))}/>
    </Form.Field>
    <Button type='submit' onClick={postData}>Submit</Button>
</Form>


</div>
)

   
}
export default Create;