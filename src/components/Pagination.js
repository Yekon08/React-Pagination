import React from 'react'
import './pagination.css'

const Pagination = (props) => {

    const pageNumbers = []

    for(let i = 1 ; i <= Math.ceil(props.totalPosts / props.postsPerPage) ; i++) {
        pageNumbers.push(i)
    } 

    return (
        <nav>
            <div className='container'>
                {pageNumbers.map(number => (
                    <div key={number}>
                        <a onClick={() => props.paginate(number)} href='!#'>{number}</a>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Pagination
