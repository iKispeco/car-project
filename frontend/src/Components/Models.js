import { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("carStore")
@observer
class Models extends Component {
  render() {
    const { modelsPerPage } = this.props;
    const {
      handleSortNameAZ,
      handleSortNameZA,
      handleSortAbrvAZ,
      handleSortAbrvZA,
    } = this.props.carStore;

    return (
      <div>
        <div className="sortSection">
          <button className="btn btn-secondary" onClick={handleSortNameAZ}>
            Name A&#x2192;Z
          </button>
          <button className="btn btn-secondary" onClick={handleSortNameZA}>
            Name Z&#x2192;A
          </button>
          <button className="btn btn-secondary" onClick={handleSortAbrvAZ}>
            Abrv A&#x2192;Z
          </button>
          <button className="btn btn-secondary" onClick={handleSortAbrvZA}>
            Abrv Z&#x2192;A
          </button>
        </div>
        <ul className="container">
          {modelsPerPage.map((model) => (
            <li key={model._id}>
              <div className="element">
                <h6>{model.name}</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Models;
