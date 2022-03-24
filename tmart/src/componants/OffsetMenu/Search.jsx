import React, { useState } from 'react'

const Search = ({ setToggleSearch }) => {

    const [searchText, setsearchText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        //collect the text;

        //Hit the API
        setsearchText("");
        setToggleSearch(false)
    }
    return (
        <div className="search__area">
            <div className="container" >
                <div className="row" >
                    <div className="col-md-12" >
                        <div className="search__inner">
                            <form onSubmit={handleSubmit} >
                                <input placeholder="Search here... " type="text" onChange={(e) => setsearchText(e.target.value)} />
                                <button type="submit"></button>
                            </form>
                            <div className="search__close__btn">
                                <span className="search__close__btn_icon" onClick={() => setToggleSearch(false)}>
                                    <i className="zmdi zmdi-close" >

                                    </i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;