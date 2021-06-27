import React from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";
import {useSelector,useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {smallImage} from "../utils";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";
import {loadGames} from "../actions/gameAction"


const GameDetails = ({id}) => {
    const history = useHistory();
    console.log("🍠",typeof id);
    const dispatch = useDispatch();
    const getImage = (platforms) =>{
        switch(platforms){
            
                case "PlayStation 4":
                  return playstation;
                case "Xbox One":
                  return xbox;
                case "PC":
                  return steam;
                case "Nintendo Switch":
                  return nintendo;
                case "iOS":
                  return apple
                default:
                  return gamepad;
        }
    }
    const getStar = () => {

        const rating = Math.floor(gameDetail.rating);

        const starArray = [];

        for(let i=1;i<=5;i++){
            if(i<=rating){
                starArray.push(<img src={starFull}/>)
            }
            else{
                starArray.push(<img src={starEmpty}/>)
            }
        }

        return starArray
}

    // here we are trying close the the another card using useHistory()
    const exitDetailHandler = (e) => {
        const element = e.target;
        
        if(element.classList.contains('Shadow')){
            document.body.style.overflow='auto';
            // console.log("in card shadow",history);
            history.push('/')
            dispatch(loadGames());
        }
        console.log("element",element);
    }

    const {screenshot,gameDetail,isLoading} = useSelector((state)=>state.details);
    return (
        <>
        {!isLoading && 
        (
        <CardShadow className="Shadow" onClick={exitDetailHandler}>
            <Detail layoutId={id}>
                <Stats>
                    <Rating>
                        <motion.h3 layoutId={`title ${id}`}>{gameDetail.name}</motion.h3>
                        <p>{gameDetail.rating}</p>
                        <span>{getStar()}</span>
                        
                    </Rating>
                    <Info>
                        <h3>plaforms</h3>
                        <Platforms>
                            {gameDetail.platforms.map((data)=>
                                <h3 key={data.platform.id}><img src={getImage(data.platform.name)}  alt="" /></h3>
                            )}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img pathname={`image ${id}`} src={smallImage(gameDetail.background_image,1280)} alt="" />
                </Media>
                <Description>
                    <p>{gameDetail.description}</p>
                </Description>
                <div className="gallery">
                    {screenshot.results.map((data)=>
                        <img src={smallImage(data.image,1280)} key={data.id} alt={data.id} />
                    )}
                </div>

            </Detail>
        </CardShadow>
        )
            }
        </>
    )
}

const CardShadow = styled(motion.div)`
    width:100%;
    top:0;
    left:0;
    background:rgba(0,0,0,0.7);
    /* opacity: 0.2; */
    overflow-y: scroll;
    position: fixed;
    min-height: 100vh;

    &::-webkit-scrollbar{
        width:0.3rem

    }
    &::-webkit-scrollbar-thumb{
        background:white  ;
    }

    &::-webkit-scrollbar-track{
        background:#1b1b1b;
    }
    z-index:1;

`;

const Detail = styled(motion.div)`
    width:80%;
    background: #1b1b1b;
    border-radius: 1rem;
    position: absolute;
    padding:2rem 5rem;
    color: black;
    left:10%;
    z-index:5;
    opacity:1;
    img{
        width:100%
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
   
`;

const Rating = styled.div`
/* span{
    display: inline;
} */
     img{
        width:1rem;
        height: 1rem;
        display: inline;
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        
        img{
            margin-left:5rem;
            width: 2rem;
        }
`;

const Description = styled(motion.div)`
    padding:1rem 0rem;
    margin:5rem 0rem;
`;

const Media = styled(motion.div)`
    margin-top:2rem;

`;

export default GameDetails
