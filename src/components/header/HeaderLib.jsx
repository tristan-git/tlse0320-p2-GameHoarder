import React from 'react';
import './header.scss';
import Swal from 'sweetalert2';
import DisplayRating from '../contents/my-games/DisplayRating';

export default class HeaderLib extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastGameImg: null,
      lastGameName: null,
      lastGameRating: null,
      isThereIsGame: true,
      lastGameAdded: null
    };
    this.removeGameFromHeader = this.removeGameFromHeader.bind(this);
  }

  componentDidMount() {
    this.handleLastGameAdded();
    /* console.log(this.state.lastGameAdded); */
  }

  handleLastGameAdded() {
    const { id } = this.state;
    if (this.state.isGame && window.localStorage.length > 0) {
      const key = window.localStorage.key(0);
      const lastGameInfo = JSON.parse(window.localStorage.getItem(key));
      this.setState({
        isGame: true,
        lastGameName: lastGameInfo.title,
        lastGameRating: lastGameInfo.rating,
        lastGameImg: lastGameInfo.img
      });
    } else {
      this.setState({
        lastGameName: "Ajouter d'abord un jeu",
        lastGameImg: "url('/img/svg/20200410190035_1.jpg')",
        isGame: false
      });
    }
  }

  removeGameFromHeader() {
    Swal.fire({
      title: 'Etes-vous sûr?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--primary-color)',
      cancelButtonColor: 'var(--alert-color)',
      confirmButtonText: 'Oui, je supprime!',
      cancelButtonText: 'Annuler'
    }).then(result => {
      if (result.value) {
        Swal.fire({
          title: 'Supprimé!',
          text: 'Votre jeu a été supprimé.',
          icon: 'success',
          showConfirmButton: false,
          timer: 900
        });
        localStorage.removeItem(this.state.lastGameName);
        this.handleLastGameAdded();
      }
    });
  }

  render() {
    if (this.state.isGame) {
      return (
        <div
          className="headerContainer"
          style={{ backgroundImage: `url(${this.state.lastGameImg})` }}
        >
          <div className="filter">
            <div className="gameSugg">
              <div style={{ backgroundImage: `url(${this.state.lastGameImg})` }}></div>
            </div>

            <div className="wrapper">
              <div className="infoHeaderContainer">
                <h2>{this.state.lastGameName}</h2>
              </div>

              <div className="infoHeaderContainer">
                <div className="ratingSuggestion">
                  <DisplayRating rating={this.state.lastGameRating} />
                </div>
              </div>
              <div className="infoHeaderContainer blue">
                <div className="crossContainer" onClick={this.RemoveGameFromHeader}>
                  <img src="./img/svg/delete-white.svg" alt="bouton plus" />
                </div>
              </div>

              <div className="infoHeaderContainer blue">
                <label htmlFor="gameStatusHeader">
                  <select name="gameStatus" id="gameStatusHeader">
                    <option value="0">statut</option>
                    <option value="1">pas commencé</option>
                    <option value="2">En cours</option>
                    <option value="3">terminés</option>
                  </select>
                </label>
              </div>
            </div>

            {/* <h1>{this.state.lastGameName}</h1>
            <div className="infoHeaderContainer">
              <div className="crossContainer" onClick={this.removeGameFromHeader}>
                <div className="crossLine"></div>
                <div className="crossLine"></div>
              </div>
              <p>{this.state.lastGameRating / 10 / 2}</p>
              <label htmlFor="gameStatusHeader">
                <select name="gameStatus" id="gameStatusHeader">
                  <option value="0">statut</option>
                  <option value="1">pas commencé</option>
                  <option value="2">En cours</option>
                  <option value="3">terminés</option>
                </select>
              </label>
            </div> */}
          </div>
        </div>
      );
    } else {
      return (
        <div className="headerContainer" style={{ backgroundImage: `${this.state.lastGameImg}` }}>
          <div className="filter">
            <img src="./img/logo.svg" alt="logo du site" />
            <h1>{this.state.lastGameName}</h1>
          </div>
        </div>
      );
    }
  }
}

// import React from 'react';
// import './header.scss';
// import Swal from 'sweetalert2';
// import DisplayRating from '../contents/my-games/DisplayRating';

// export default class HeaderLib extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lastGameImg: null,
//       lastGameName: null,
//       lastGameRating: null,
//       isThereIsGame: true,
//       lastGameAdded: null
//     };
//     this.removeGameFromHeader = this.removeGameFromHeader.bind(this);
//   }

//   componentDidMount() {
//     this.handleLastGameAdded();
//   }

//   componentDidUpdate() {
//     if (
//       this.props.listGamesLib &&
//       this.props.listGamesLib.length > 0 &&
//       this.state.lastGameName != this.props.listGamesLib[0].title
//     ) {
//       this.handleLastGameAdded();
//     } else if (
//       this.props.listGamesLib.length === 0 &&
//       this.state.lastGameName !== "Ajouter d'abord un jeu"
//     ) {
//       this.handleLastGameAdded();
//     }
//   }

//   /*   handleLastGameAdded() {
//     if (this.props.listGamesLib && this.props.listGamesLib.length > 0) {
//       const lastGameInfo = this.props.listGamesLib[0];
//       this.setState({
//         isThereIsGame: true,
//         lastGameName: lastGameInfo.title,
//         lastGameRating: lastGameInfo.rating,
//         lastGameImg: lastGameInfo.img
//       });
//     } else {
//       this.setState({
//         lastGameName: "Ajouter d'abord un jeu",
//         lastGameImg: "url('/img/20200410190035_1.jpg')",
//         isThereIsGame: false
//       });
//     }
//   } */

//   handleLastGameAdded() {
//     const { id } = this.state;
//     if (this.state.isGame && window.localStorage.length > 0) {
//       const key = window.localStorage.key(0);
//       const lastGameInfo = JSON.parse(window.localStorage.getItem(key));
//       this.setState({
//         isGame: true,
//         lastGameName: lastGameInfo.title,
//         lastGameRating: lastGameInfo.rating,
//         lastGameImg: lastGameInfo.img
//       });
//     } else {
//       this.setState({
//         lastGameName: "Ajouter d'abord un jeu",
//         lastGameImg: "url('/img/20200410190035_1.jpg')",
//         isGame: false
//       });
//     }
//   }

//   /*   removeGameFromHeader() {
//     const { gameToRemove } = this.props;
//     Swal.fire({
//       title: 'Etes-vous sûr?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: 'var(--primary-color)',
//       cancelButtonColor: 'var(--alert-color)',
//       confirmButtonText: 'Oui, je supprime!',
//       cancelButtonText: 'Annuler'
//     }).then(result => {
//       if (result.value) {
//         Swal.fire({
//           title: 'Supprimé!',
//           text: 'Votre jeu a été supprimé.',
//           icon: 'success',
//           showConfirmButton: false,
//           timer: 900
//         });
//         gameToRemove(this.state.lastGameName);
//         this.handleLastGameAdded();
//       }
//     });
//   } */

//   removeGameFromHeader() {
//     Swal.fire({
//       title: 'Etes-vous sûr?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: 'var(--primary-color)',
//       cancelButtonColor: 'var(--alert-color)',
//       confirmButtonText: 'Oui, je supprime!',
//       cancelButtonText: 'Annuler'
//     }).then(result => {
//       if (result.value) {
//         Swal.fire({
//           title: 'Supprimé!',
//           text: 'Votre jeu a été supprimé.',
//           icon: 'success',
//           showConfirmButton: false,
//           timer: 900
//         });
//         localStorage.removeItem(this.state.lastGameName);
//         this.handleLastGameAdded();
//         setTimeout(function reload() {
//           window.location.reload(true);
//         }, 1000);
//       }
//     });
//   }

//   render() {
//     if (this.state.isThereIsGame) {
//       return (
//         <div
//           className="headerContainer"
//           style={{ backgroundImage: `url(${this.state.lastGameImg})` }}
//         >
//           <div className="filter">
//             <div className="gameSugg">
//               <div style={{ backgroundImage: `url(${this.state.lastGameImg})` }} />
//             </div>
//             <div className="wrapper">
//               <div className="infoHeaderContainer">
//                 <h2>{this.state.lastGameName}</h2>
//               </div>
//               <div className="infoHeaderContainer">
//                 <div className="ratingSuggestion">
//                   <DisplayRating rating={this.state.lastGameRating} />
//                 </div>
//               </div>
//               <div className="infoHeaderContainer blue">
//                 <div className="crossContainer" onClick={this.removeGameFromHeader}>
//                   <img src="./img/svg/delete-white.svg" alt="bouton plus" />
//                 </div>
//               </div>
//               <div className="infoHeaderContainer blue">
//                 <label htmlFor="gameStatusHeader">
//                   <select name="gameStatus" id="gameStatusHeader">
//                     <option value="0">statut</option>
//                     <option value="1">pas commencé</option>
//                     <option value="2">En cours</option>
//                     <option value="3">terminés</option>
//                   </select>
//                 </label>
//               </div>
//             </div>

//             {/* <h1>{this.state.lastGameName}</h1>
//             <div className="infoHeaderContainer">
//               <div className="crossContainer" onClick={this.removeGameFromHeader}>
//                 <div className="crossLine"></div>
//                 <div className="crossLine"></div>
//               </div>
//               <p>{this.state.lastGameRating / 10 / 2}</p>
//               <label htmlFor="gameStatusHeader">
//                 <select name="gameStatus" id="gameStatusHeader">
//                   <option value="0">statut</option>
//                   <option value="1">pas commencé</option>
//                   <option value="2">En cours</option>
//                   <option value="3">terminés</option>
//                 </select>
//               </label>
//             </div> */}
//           </div>
//         </div>
//       );
//     }
//     return (
//       <div className="headerContainer" style={{ backgroundImage: `${this.state.lastGameImg}` }}>
//         <div className="filter">
//           <img src="./img/logo.svg" alt="logo du site" />
//           <h1>{this.state.lastGameName}</h1>
//         </div>
//       </div>
//     );
//   }
// }
