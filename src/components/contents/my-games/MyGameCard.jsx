import React from 'react';
import './MyGameCard.scss';
import PropTypes from 'prop-types';
import DisplayRating from './DisplayRating';

class MyGameCard extends React.Component {
  constructor(props) {
    super(props);

    this.getSelectValue = this.getSelectValue.bind(this);
  }

  getSelectValue(event) {
    const valueToChange = event.target.value;
    const { data, handleChangeStatue } = this.props;
    const { img, title, rating, id, platformsName, addingDate } = data;

    const values = {
      addingDate,
      title,
      img,
      rating,
      id,
      addToLib: true,
      addToWish: false,
      platformsName,
      status: valueToChange
    };
    handleChangeStatue(values);
  }

  render() {
    const { props } = this;
    const { img, title, rating, status } = props.data;

    return (
      <section className="Card">
        <div className="header">
          <h3>{title}</h3>

          <button onClick={() => props.gameToRemove(title)} className="close-btn" type="submit">
            <img
              src="./img/svg/delete-black.svg"
              alt="delete"
              style={{ backgroundColor: 'transparent' }}
            />
          </button>
        </div>
        <div className="image" style={{ backgroundImage: `url(${img[0]})` }} />
        <div className="footer">
          <div className="ratingSuggestion">
            <DisplayRating rating={rating} />
          </div>

          <select
            name="statuts"
            className="statuts"
            onChange={this.getSelectValue}
            defaultValue={status}
          >
            <option value="Statuts">STATUTS</option>
            <option value="Pas commencé">Pas commencé</option>
            <option select value="En cours">
              En cours
            </option>
            <option value="Terminé">Terminé</option>
          </select>
        </div>
      </section>
    );
  }
}

MyGameCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  gameToRemove: PropTypes.func.isRequired,
  handleChangeStatue: PropTypes.func.isRequired
};
export default MyGameCard;
