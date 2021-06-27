//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;



//Popular Games
const popular_games = `games?key=${process.env.REACT_APP_IGNITE_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;
const upcoming_games = `games?key=${process.env.REACT_APP_IGNITE_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=20`;
const newGames = `games?key=${process.env.REACT_APP_IGNITE_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=20`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
//GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${process.env.REACT_APP_IGNITE_API}`;
//Game ScreenShots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_IGNITE_API}`;
//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?key=${process.env.REACT_APP_IGNITE_API}&search=${game_name}&page_size=20`;

console.log(`${base_url}${popular_games}`);


// https://api.rawg.io/api/games?key=8452841466644ee2b4ae2786b59409bb&dates=2020-05-28,2021-05-28&ordering=-rating&page_size=10

// https://api.rawg.io/api/games?key=8452841466644ee2b4ae2786b59409bb&{64551} 
// not the above one below one
// https://api.rawg.io/api/games/573923?key=8452841466644ee2b4ae2786b59409bb
// https://api.rawg.io/api/games?key=8452841466644ee2b4ae2786b59409bb&search=Deathloop