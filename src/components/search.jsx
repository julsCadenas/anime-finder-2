
const Search = () => {
    return(
        <div className="bg-black bg-opacity-5 backdrop-filter backdrop-blur-sm h-screen w-screen transition-all">
            <form className="max-w-md mx-auto">   
                <div className="relative">
                    <input 
                        type="text"
                        id="default-search"
                        className="max-w-96 max-h-20 w-80 h-full md:w-full md:h-full pl-5 md:pl-8 bg-black bg-opacity-5 backdrop-filter backdrop-blur-sm border-b-2 border-transparent 
                                    focus:border-neutral-50 focus:outline-none font-Montserrat text-lg md:text-xl 
                                    text-neutral-50 mt-20 transition-colors duration-300" 
                        placeholder="Search for Anime here"
                    />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                    </button>
                </div>
            </form>
        </div>
    )
};

export default Search;
