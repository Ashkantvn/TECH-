const Search = () =>{
    return(
        <>
            <div className="search-m">
                <div className="d-flex justify-content-center my-4">
                    <input className="search-input" type="search" name="search" id="" />
                    <button className="d-flex justify-content-center search-btn py-2">search</button>
                </div>
                <div className="d-flex justify-content-center search-span">
                    <span className="m-5">Search your considered device</span>     
                </div> 
            </div>
        </>
    )
}
export default Search;