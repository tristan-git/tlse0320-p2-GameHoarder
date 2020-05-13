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

  render() {
    let isAddToLib;
    if (this.props.listGamesLib) {
      const newAr = this.props.listGamesLib.filter(game => game.title === this.props.name);
      isAddToLib = newAr.length > 0 && newAr[0].addToLib;
    }
    if (this.props.listGamesLib === undefined) {
      isAddToLib = false;
    }

    const {
      rating,
      name,
      url,
      addToWish,
      platformsName,
      genresName,
      summary,
      artworksUrl
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
                  onClick={addToWish ? this.removeToWishlist : this.addToWishlist}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <img src="/img/svg/wishlist.svg" alt="icon wishlist" />
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

              {console.log(isAddToLib)}
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
