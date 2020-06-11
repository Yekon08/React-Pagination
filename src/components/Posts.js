import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const Posts = (props) => {

    const classes = useStyles();

    if(props.loading) {
        return <h2>Loading ...</h2>
    }

    return (
        <div className={classes.root}>
            <List>
                {props.posts.map(post => (
                    <ListItem component="a" href="#" button key={post.id}>
                        <ListItemText primary={post.title} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default Posts
