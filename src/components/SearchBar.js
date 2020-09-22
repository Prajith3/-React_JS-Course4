import React,{useState} from "react";


const SearchBar = ({onFORMSubmit})=>{
    const [term,setTerm]=useState('');

    const onInputChange=(event)=>{
        //console.log(event.target.value);
        setTerm(event.target.value);
        //call back pls
    };

    const onFormSubmit=(event)=>{
        event.preventDefault();
        // call back
        onFORMSubmit(term);
    };

    return(
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        placeholder="Yo! Type Something..." 
                        type="text" 
                        value={term} 
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    );


};


export default SearchBar;
