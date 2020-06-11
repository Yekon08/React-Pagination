import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
    margin: theme.spacing(1),
    },
},
}));

const PaginationPosts = (props) => {

    const pageNumbers = []
    const classes = useStyles();

    for(let i = 1 ; i <= Math.ceil(props.totalPosts / props.postsPerPage) ; i++) {
        pageNumbers.push(i)
    } 

    return (
        <div>
            <ButtonGroup variant='contained' color='primary'>
                {pageNumbers.map(number => (
                    <Button key={number} onClick={() => {props.paginate(number)}}>
                        {number}
                    </Button>
                ))}
            </ButtonGroup>
        </div>
    )
}

export default PaginationPosts
