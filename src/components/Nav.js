import React,{useState} from 'react'
import {motion} from "framer-motion";
import styled from 'styled-components';
import logo from "../img/logo.svg";
import {searchedGames,clearSearched} from "../actions/gameAction";
import {useDispatch} from "react-redux";
import {fadeIn} from "../animation";

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput,setTextInput] = useState("");

    const inputHandler = (e) =>{
        setTextInput(e.target.value);
    }

    const submitHandler =(e)=>{
        e.preventDefault();
        if(textInput.length)
        {
            dispatch(searchedGames(textInput));
        }
        
    }
    
    const clearSearchHandler =()=>{
        dispatch(clearSearched());
        setTextInput("");
    }

    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo style={{cursor:'pointer'}} onClick={clearSearchHandler}>
                <img src={logo} alt="" />
                <h1>Awesome Games</h1>
            </Logo>
            <form className="Search">
                <input value={textInput} onChange={inputHandler} type="text" />
                <button onClick={submitHandler} type="submit">Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.div)`
    padding:3rem 3rem;
    text-align: center;
    width: 100%;
    .Search{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    margin-top:1rem;
    input{
        /* width:30%;
        height:2rem;
        padding:1.3rem;
        padding-top: 1.4rem;
        font-size: 1.5rem;
        border: none;
        
        */
        /* box-shadow: ; */
        padding: 0.7rem 2rem;
        width:30%;
        border: none;
        font-size: 1.05rem;
        box-shadow:0px 0px 30px #3f4454;
    }

    button{
        padding: 0.8rem 2rem;
        background:#3a4157;
        border:none;
        cursor: pointer;
        /* padding:0.4rem 2rem 0.8rem;
        font-size: 1.5rem;
        border:none;
        cursor: pointer;
        background:#3a4157;
        color: #fff;
        background:pin;
        
        margin-top:0.7rem; */
/* height: 2rem; */
    }
    }
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0rem;
    
`;

const Search = styled(motion.div)`
    
`;

export default Nav

