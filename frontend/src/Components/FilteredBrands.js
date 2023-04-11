import { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("carStore")
@observer
class FilteredBrands extends Component {
  render() {
    const { filterBrandArray } = this.props.carStore;
    return (
      <ul className="container">
        {filterBrandArray.map((item) => (
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

export default FilteredBrands;
