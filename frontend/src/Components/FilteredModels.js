import { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("carStore")
@observer
class FilteredModels extends Component {
  render() {
    const { filterModelArray } = this.props.carStore;

    return (
      <ul className="container">
        {filterModelArray.map((model) => (
          <li key={model._id}>
            <div className="element">
              <h6>{model.name}</h6>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default FilteredModels;
