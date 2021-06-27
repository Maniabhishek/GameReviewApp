import React, {useEffect,useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {loadGames} from "../actions/gameAction";
import Game from "../components/Game"
import styled from "styled-components";
import {motion,AnimatePresence,AnimateSharedLayout} from "framer-motion";
import GameDetails from "../components/GameDetails";
// import motion from "framer-motion";
import {useLocation,useHistory} from "react-router-dom";
import Nav from "../components/Nav";
import loader from "../img/loading.gif"


const Home = () => {

    const location = useLocation();
    const history = useHistory();

    const pathname = location.pathname.split("/")[1];
    const dispatch = useDispatch();

    useEffect(()=>{
        
        dispatch(loadGames())
        

    },[dispatch]);

    const {newGames,popular,upcoming,searched,isLoading} = useSelector((state)=>state.games)

    console.log(upcoming)
    
    return (
        <GameList>
            <Nav/>
            <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                {pathname && <GameDetails id={pathname}/>}
           </AnimatePresence>
           {
               isLoading ? 
               <Loader>
                  <img src={loader} alt="" />
               </Loader>
               :
               (
            <div className="GameLoad">
                {
                    searched.length && searched[0]!=null ?
                
                (<div className="Searched">
                <h2>You Searched</h2>
                    <Games>
                    {searched.map((searchedGame)=>
                    (<Game name={searchedGame.name} released= {searchedGame.released} image={searchedGame.background_image} 
                        id={searchedGame.id }
                        key={searchedGame.id}
                        />  )
                    )}
                    </Games>
                    </div>)
                    :""

            }
                <h2>Upcoming games</h2>
                <Games>
                {upcoming.map((upcomingGame)=>
                (<Game name={upcomingGame.name} released= {upcomingGame.released} image={upcomingGame.background_image} 
                    id={upcomingGame.id }
                    key={upcomingGame.id}
                    />  )
                )}
                </Games>

                <h2>Popular Games</h2>
                <Games>
                {popular.map((popularGames)=>
                (<Game name={popularGames.name} released= {popularGames.released} image={popularGames.background_image} 
                    id={popularGames.id }
                    key={popularGames.id}
                    />  )
                )}
                </Games>

                
                <h2>New Games</h2>
                <Games>
                {newGames.map((newGame)=>
                (<Game name={newGame.name} released= {newGame.released} image={newGame.background_image} 
                    id={newGame.id }
                    key={newGame.id}
                    />  )
                )}
                </Games>
            </div>)
        }
            </AnimateSharedLayout>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding:0rem 5rem;
    h2{
       padding: 3rem 0rem;
    } 
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

const Loader = styled.div`
    display: flex;
    flex:1;
    /* margin :0 auto;
    width:25%; */
    align-items: center;
    justify-content: center;
    img{
        width:4rem;
        height: 4rem;
    }

    @media (max-width:800px){
        text-align: center;
        margin :0 auto;
        width:25%;
        img{
        width:4rem;
        height: 4rem;
    }
    }
`;

export default Home
