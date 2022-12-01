import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { createSearch } from '../../store/search'
import '../NavBar.css'

function Searchbar() {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const found = useSelector(state => state.search.questions)
    //console.log('heyyyy i found it man', found)

    const searcher = (e) => {
        e.preventDefault()
        //console.log(search)

        let obj = {
            search
        }
        dispatch(createSearch(obj))
        setSearch('')
        return history.push('/search-results')
    }
    return (
        <form onSubmit={searcher}>
            <div>
                <button className='magglass'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>

                <input className='searchbarn' minLength={3} placeholder='Search Fourth Quorra' type='text' value={search} onChange={(e) => setSearch(e.target.value)} required />
            </div>
        </form>
    )

}


export default Searchbar;
