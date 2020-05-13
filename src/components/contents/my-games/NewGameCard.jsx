import React from 'react';
import PropTypes from 'prop-types';
import './MyGameCard';
import DisplayRating from './DisplayRating';
import InfoCard from './InfoCard';

class NewGameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.getDataGame = this.getDataGame.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.addToWishlist = this.addToWishlist.bind(this);
    this.removeToWishlist = this.removeToWishlist.bind(this);
    this.showInfoGame = this.showInfoGame.bind(this);
    this.removeDataGame = this.removeDataGame.bind(this);
  }

  componentDidMount() {}

  getDataGame() {
    const { url: img, name: title, rating, handleGamesList, id, platformsName } = this.props;
    const values = {
      addingDate: new Date(),
      title,
      img,
      rating,
      id,
      platformsName,
      addToLib: true,
      addToWish: false
    };
    handleGamesList(values);
  }

  addToWishlist() {
    const { url: img, name: title, rating, handleWishlistGame, id, platformsName } = this.props;
    const values = {
      addingDate: new Date(),
      title,
      img,
      rating,
      id,
      platformsName,
      addToLib: false,
      addToWish: true
    };
    handleWishlistGame(values);
  }

  removeToWishlist() {
    const {
      url: img,
      name: title,
      rating,
      handleRemoveWishlistGame,
      id,
      platformsName
    } = this.props;
    const values = {
      addingDate: new Date(),
      title,
      img,
      rating,
      id,
      platformsName,
      addToLib: false,
      addToWish: false
    };
    handleRemoveWishlistGame(values);
  }

  showInfoGame() {
    const {
      url: img,
      name: title,
      rating,
      id,
      platformsName,
      genresName,
      artworksUrl,
      summary,
      handleInfoGame
    } = this.props;
    const values = {
      img,
      title,
      rating,
      id,
      platformsName,
      genresName,
      artworksUrl,
      summary
    };
    this.setState(state => ({
      show: !state.show
    }));
    handleInfoGame(values);
  }

  hideModal() {
    this.setState({ show: false });
  }

  removeDataGame() {
    const { url: img, name: title, rating, id, platformsName, handleremoveDataGame } = this.props;
    const values = {
      addingDate: new Date(),
      title,
      img,
      rating,
      id,
      platformsName,
      addToLib: false,
      addToWish: false
    };
    handleremoveDataGame(values);
  }

  render() {
    let isAddToLib;
    if (this.props.listGamesLib) {
      const newAr = this.props.listGamesLib.filter(game => game.title === this.props.name);
      isAddToLib = newAr.length > 0 && newAr[0].addToLib;
    }
    if (this.props.listGamesLib === undefined) {
      isAddToLib = false;
    }

    let isWish;
    if (this.props.listGamesLib) {
      const newAr = this.props.listGamesLib.filter(game => game.title === this.props.name);
      isWish = newAr.length > 0 && newAr[0].addToWish;
    }
    if (this.props.listGamesLib === undefined) {
      isWish = false;
    }

    const {
      rating,
      name,
      url,
      addToWish,
      platformsName,
      genresName,
      summary,
      artworksUrl,
      addToLib
    } = this.props;
    const { show } = this.state;

    return (
      <div className="Card">
        <InfoCard
          show={show}
          handleClose={this.hideModal}
          name={name}
          url={url}
          rating={rating}
          platformsName={platformsName}
          genresName={genresName}
          artworksUrl={artworksUrl}
          summary={summary}
        />

        <div
          className="ImageCard"
          style={{ backgroundImage: `url(${url[0]})` }}
          onClick={this.showInfoGame}
        />
        <div className="GameInfo">
          <div className="GameInfoTitle">
            <div>
              <div className="NameWish">
                <h3 className="GameName" onClick={this.showInfoGame}>
                  {name}
                </h3>
                <button
                  type="button"
                  onClick={isWish || addToWish ? this.removeToWishlist : this.addToWishlist}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <img
                    src={isWish || addToWish ? '/img/svg/redheart.svg' : '/img/svg/wishlist.svg'}
                    alt="icon wishlist"
                  />
                </button>
              </div>

              <p className="GameSupport">
                {platformsName
                  .map(platform => `${platform}/`)
                  .join('')
                  .slice(0, -1)}
              </p>
            </div>

            <div className="ratingSuggestion">
              <DisplayRating rating={rating} />
            </div>

            <div
              className="ButtonAddLibrary"
              onClick={isAddToLib ? this.removeDataGame : this.getDataGame}
            >
              <img
                src="/img/svg/add.svg"
                alt="icon add or delete library"
                style={isAddToLib ? { transform: 'rotate(45deg)' } : { transform: 'rotate(0deg)' }}
              />
              {isAddToLib ? 'Déjà dans votre bibliothèque.' : 'Ajouter à votre bibliothèque.'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewGameCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.array.isRequired,
  platformsName: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  handleGamesList: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  addToLib: PropTypes.string.isRequired,
  handleWishlistGame: PropTypes.string.isRequired,
  handleRemoveWishlistGame: PropTypes.func.isRequired,
  addToWish: PropTypes.string.isRequired,
  games: PropTypes.array.isRequired,
  genresName: PropTypes.array.isRequired,
  artworksUrl: PropTypes.array.isRequired,
  summary: PropTypes.string.isRequired,
  handleInfoGame: PropTypes.func.isRequired
};

export default NewGameCard;

// import React from 'react';
// import PropTypes from 'prop-types';
// import './MyGameCard';
// import DisplayRating from './DisplayRating';
// // import DisplayRating from './DisplayRating';
// import Modal from './Modal';
// import ThreeHorseLoading from 'react-loadingg/lib/ThreeHorseLoading';

// class NewGameCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       prevListGameWish: [],
//       addToWish: false
//     };
//     this.getDataGame = this.getDataGame.bind(this);
//     this.addToWishlist = this.addToWishlist.bind(this);
//     this.removeToWishlist = this.removeToWishlist.bind(this);
//     this.handleAddToWish = this.handleAddToWish.bind(this);
//   }

//   componentDidMount() {
//     if (this.props.listGamesLib) {
//       this.props.listGamesLib
//         .filter(game => game.title === this.props.name)
//         .map(game => {
//           if (game.title === this.props.name) {
//             this.setState({ addToWish: game.addToWish });
//           }
//         });
//     }
//     if (this.state.prevListGameWish.length !== this.props.listGamesLib) {
//       this.setState({ prevListGameWish: this.props.listGamesLib });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.addToWish !== this.state.addToWish) {
//       this.props.listGamesLib
//         .filter(game => game.title === this.props.name)
//         .map(game => {
//           if (game.title === this.props.name) {
//             this.setState({ addToWish: game.addToWish });
//           }
//         });
//     }
//     if (this.props.listGamesLib.length === 0 && this.state.addToWish === true) {
//       this.setState({ addToWish: false });
//     }
//     if (this.props.listGamesLib.length !== 0 && this.state.addToWish === true) {
//       this.setState({ addToWish: true });
//     }
//   }

//   getDataGame() {
//     const { url: img, name: title, rating, handleGamesList, id, platformsName } = this.props;
//     const values = {
//       addingDate: new Date(),
//       title,
//       img,
//       rating,
//       id,
//       platformsName,
//       addToLib: true,
//       addToWish: false
//     };
//     handleGamesList(values);
//   }

//   handleAddToWish() {
//     const { addToWish } = this.state;
//     if (addToWish) {
//       this.setState({ addToWish: false });
//       this.removeToWishlist();
//     } else {
//       this.setState({ addToWish: true });
//       this.addToWishlist();
//     }
//   }

//   addToWishlist() {
//     const {
//       url: img,
//       name: title,
//       rating,
//       handleGamesList,
//       handleWishlistGame,
//       id,
//       platformsName
//     } = this.props;
//     const values = {
//       addingDate: new Date(),
//       title,
//       img,
//       rating,
//       id,
//       platformsName,
//       addToLib: false,
//       addToWish: true
//     };
//     handleWishlistGame(values);
//   }

//   removeToWishlist() {
//     const {
//       url: img,
//       name: title,
//       rating,
//       handleRemoveWishlistGame,
//       id,
//       platformsName
//     } = this.props;
//     const values = {
//       addingDate: new Date(),
//       title,
//       img,
//       rating,
//       id,
//       platformsName,
//       addToLib: false,
//       addToWish: false
//     };
//     handleRemoveWishlistGame(values);
//   }

//   render() {
//     const { rating, name, url, addToLib, platformsName } = this.props;
//     const { show, addToWish } = this.state;

//     return (
//       <div className="Card">
//         <div className="ImageCard" style={{ backgroundImage: `url(${url[0]})` }} />
//         <div className="GameInfo">
//           <div className="GameInfoTitle">
//             <div>
//               <div className="NameWish">
//                 <h3 className="GameName">{name}</h3>
//                 <button
//                   type="button"
//                   onClick={() => this.handleAddToWish()}
//                   style={{
//                     backgroundColor: 'transparent',
//                     border: 'none',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   <img
//                     alt="icon wishlist"
//                     src={addToWish ? '/img/svg/redheart.svg' : '/img/svg/wishlist.svg'}
//                   />
//                 </button>
//               </div>
//               <p className="GameSupport">
//                 {platformsName
//                   .map(platform => platform + '/')
//                   .join('')
//                   .slice(0, -1)}
//               </p>
//             </div>
//             <div className="ratingSuggestion">
//               <DisplayRating rating={rating} />
//             </div>
//             <div className="ButtonAddLibrary" onClick={this.getDataGame}>
//               <img
//                 src={addToLib ? '/img/svg/delete-white.svg' : '/img/svg/add.svg'}
//                 alt="icon add library"
//               />
//               {addToLib ? 'Déjà dans votre bibliothèque.' : 'Ajouter à votre bibliothèque.'}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// NewGameCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   url: PropTypes.array.isRequired,
//   platformsName: PropTypes.array.isRequired,
//   rating: PropTypes.number.isRequired,
//   handleGamesList: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   addToLib: PropTypes.string.isRequired,
//   handleWishlistGame: PropTypes.string.isRequired,
//   handleRemoveWishlistGame: PropTypes.func.isRequired,
//   addToWish: PropTypes.bool.isRequired
// };

// export default NewGameCard;
