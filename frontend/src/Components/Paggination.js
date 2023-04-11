import { Component } from "react";

class Paginnation extends Component {
  render() {
    const { carsPerPage, totalPosts, paginate } = this.props;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / carsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <nav className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </nav>
    );
  }
}

export default Paginnation;
