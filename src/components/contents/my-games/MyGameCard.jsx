/* eslint-disable no-useless-constructor */
import React from 'react';
import './MyGameCard.scss';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import StarRating from './StarRating';

class MyGameCard extends React.Component {
  constructor(props) {
    super(props);
    this.getRemoveGame = this.getRemoveGame.bind(this);
  }

  getRemoveGame(event) {
    this.getDataNode = event.target.parentNode.parentNode;
    const imgUrl = this.getDataNode.children[1].style.cssText;
    const title = this.getDataNode.children[0].children[0].innerText;
    const values = {
      title,
      imgUrl
    };
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
          showConfirmButton: false
        });
        localStorage.removeItem(title, JSON.stringify(values));
        setTimeout(function reload() {
          window.location.reload(true);
        }, 1000);
      }
    });
  }

  render() {
    const { url, name } = this.props;

    return (
      <section className="Card">
        <div className="header">
          <h3>{name}</h3>
          <button onClick={this.getRemoveGame} className="close-btn" type="submit">
            X
          </button>
        </div>
        <div className="image" style={{ backgroundImage: `url(${url})` }} />
        <div className="footer">
          <StarRating />
          <select name="statuts" className="statuts">
            <option value="Statuts">STATUTS</option>
            <option value="Pas commencé">Pas commencé</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
          </select>
        </div>
      </section>
    );
  }
}

MyGameCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
export default MyGameCard;
