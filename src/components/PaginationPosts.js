import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const PaginationPosts = (props) => {

    const pageNumbers = []

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
