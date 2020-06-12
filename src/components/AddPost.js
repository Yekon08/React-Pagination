import React, {useState} from 'react'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const AddPost = () => {
    const [title, SetTitle] = useState('')
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('data: ', title, text)

        axios.post(`https://jsonplaceholder.typicode.com/posts`, {
            title: title,
            body: text,
            userId: 1
        })
            .then(res => {
                console.log(res)
                console.log(res.data)
                SetTitle('')
                setText('')
            })
    }

    return (
        <Box mx='auto' m={3}>
            <Typography variant="h4">
                Add Fake Post
            </Typography>

            <Box m={2} mx='auto'>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <TextField size='small' id="outlined-basic" label="Title" variant="outlined" value={title} onChange={(e) => {SetTitle(e.target.value)}} />
                    <TextField style={styles.marginTop} id="outlined-textarea" label="Text" multiline variant="outlined" value={text} onChange={(e) => {setText(e.target.value)}} />
                    <Button type='submit' style={styles.marginTop} color='primary' variant="outlined">Send</Button>
                </form>
            </Box>
        </Box>
    )
}

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column'
    },

    marginTop: {
        marginTop: '10px'
    }
}

export default AddPost
