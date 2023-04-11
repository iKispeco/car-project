import { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("carStore")
@observer
class Brands extends Component {
  render() {
    const { data } = this.props.carStore;

    if (!Array.isArray(data)) {
      return <h2>Loading...</h2>;
    }
    return (
      <ul className="container">
        {data.map((item) => (
          <li key={item._id}>
            <div className="element">
              <h5>{item.name}</h5>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Brands;
