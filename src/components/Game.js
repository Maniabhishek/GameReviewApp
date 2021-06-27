import React from 'react'
import styled from 'styled-components';
import {motion} from "framer-motion";
import {detailAction} from "../actions/detailAction";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {smallImage} from "../utils";
import {popup} from "../animation";

const Game=({name,released,image,id} ) => {
    const dispatch = useDispatch();

    const stringID = id.toString();

    const loadDetailHandler = () => {

        document.body.style.overflow="hidden";
        dispatch(detailAction(id));
    }

    return (
        <StyledGame variants={popup} initial="hidden" animate="show" layoutId={stringID} onClick={loadDetailHandler}>
            <Link to={`/${id}`}>
                <motion.h3 layoutId={`title ${stringID}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringID}`} src={image}  />
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px  rgba(0,0,0,0.3) ;
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    

    &:hover{
        box-shadow: 0px 5px 20px  rgba(0,0,0,0.8) ;
    }
    img{
        width: 100%;
        height:40vh;
        object-fit: cover;
    }
`;

export default Game;
