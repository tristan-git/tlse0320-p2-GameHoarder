// import React from 'react';
// // import PropTypes from 'prop-types'

// class MyGameCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.name = 'name';
//     this.url = 'url';
//   }

//   render() {
//     return (
//       <section className="Card">
//         <div className="header">
//           <h3>{this.props.name}</h3>
//           <p>BIN</p>
//         </div>
//         <div className="image" style={{ backgroundImage: `url(${this.props.url})` }} />
//         <div className="footer">
//           <p>NOTATION</p>
//           <p>STATUTS</p>
//         </div>
//       </section>
//     );
//   }
// }
// export default MyGameCard;

import React from 'react';
// import PropTypes from 'prop-types'

class MyGameCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getDataGame(event) {
    const getDataNode = event.target.parentNode.parentNode;
    const imgUrl = getDataNode.children[1].style.cssText;
    const title = getDataNode.children[0].children[0].innerText;
    const values = {
      title: title,
      img: imgUrl
    };
    localStorage.setItem(title, JSON.stringify(values));
  }

  render() {
    const urlImg = this.props.url.substring(23, this.props.url.length - 3);

    console.log(urlImg);

    return (
      <section className="Card">
        <div className="header">
          <h3>{this.props.name}</h3>
          <p>BIN</p>
        </div>
        <div className="image" style={{ backgroundImage: `url(${urlImg})` }} />
        <div className="footer">
          <p>NOTATION</p>
          <p onClick={this.getDataGame}>STATUTS</p>
        </div>
      </section>
    );
  }
}
export default MyGameCard;
