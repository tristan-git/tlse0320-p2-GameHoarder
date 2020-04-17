import React from 'react';
import PropTypes from 'prop-types';
import MyGameCard from './MyGameCard';
import games from '../../data/games.json';

const ListMyGameCards = ({ value }) => {
  // const displayMyGameCard = value =>
  //   games.map(game => (
  //     <div>
  //       <MyGameCard {...game} key={`my-game-${game.name}`} />
  //     </div>
  //   ));

  // console.log(JSON.parse(window.localStorage.getItem('1')).img);

  const displayMyGameCard2 = value =>
    new Array(localStorage.length).fill().map((data, i) => (
      <div>
        <MyGameCard
          name={JSON.parse(window.localStorage.getItem(localStorage.key(i))).title}
          url={JSON.parse(window.localStorage.getItem(localStorage.key(i))).img}
          key={`my-game-${JSON.parse(window.localStorage.getItem(localStorage.key(i))).title}`}
        />
      </div>
    ));

  // const displayMyGameCard2 = () => {
  //   for (let i = 0; i < localStorage.length; i++) {
  //     <div>
  //       <p>{localStorage.getItem(localStorage.key(i))}</p>
  //     </div>;
  //   }
  // };

  return (
    <div className="grid-cards-display">
      {/* {displayMyGameCard(value)} */}
      {displayMyGameCard2()}
    </div>
  );
};

ListMyGameCards.propTypes = {
  value: PropTypes.string.isRequired
};
export default ListMyGameCards;

// import React from 'react';
// import PropTypes from 'prop-types';
// import MyGameCard from './MyGameCard';
// import games from '../../data/games.json';

// const ListMyGameCards = ({ value }) => {

//   const displayMyGameCard = value =>
//     games
//       .filter(game => (value ? game.name.includes(value) : game))
//       .map(game => (
//         <div>
//           <MyGameCard {...game} key={`my-game-${game.name}`} />
//         </div>
//       ));

//   return <div className="grid-cards-display">{displayMyGameCard(value)}</div>;
// };

// ListMyGameCards.propTypes = {
//   value: PropTypes.string.isRequired
// };
// export default ListMyGameCards;
