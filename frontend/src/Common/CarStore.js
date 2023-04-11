import { observable, action, makeObservable } from "mobx";

class CarStore {
  constructor() {
    makeObservable(this);
  }

  @observable data = [];
  @observable models = [];
  @observable filterBrandArray = [];
  @observable filterModelArray = [];

  // SECTION WITH FETCHING DATA FROM SERVER METHODS
  @action
  fetchBrands = () => {
    fetch("http://localhost:8000/cars")
      .then((response) => response.json())
      .then((data) => {
        this.data = Object.values(data);
      });
  };

  @action
  fetchModels = () => {
    fetch("http://localhost:8000/models")
      .then((response) => response.json())
      .then((data) => {
        this.models = Object.values(data);
      });
  };

  // FETCH ONLY FILTERED MODELS FROM DATABASE
  @action
  fetchFilteredBrands = (string) => {
    fetch(`http://localhost:8000/cars/search?name=${string}`)
      .then((response) => response.json())
      .then((data) => {
        this.filterBrandArray = Object.values(data);
      });
  };

  @action
  fetchFilteredModels = (string) => {
    fetch(`http://localhost:8000/models/search?name=${string}`)
      .then((response) => response.json())
      .then((data) => {
        this.filterModelArray = Object.values(data);
      });
  };

  // SECTION WITH SORTING METHODS
  @action handleSortNameAZ = () => {
    const sortedModels = [...this.models].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    this.models = sortedModels;
  };
  @action handleSortNameZA = () => {
    const sortedModels = [...this.models].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    this.models = sortedModels;
  };
  @action handleSortAbrvAZ = () => {
    const sortedModels = [...this.models].sort((a, b) =>
      a.abrv.localeCompare(b.abrv)
    );
    this.models = sortedModels;
  };
  @action handleSortAbrvZA = () => {
    const sortedModels = [...this.models].sort((a, b) =>
      b.abrv.localeCompare(a.abrv)
    );
    this.models = sortedModels;
  };
}

export default CarStore;
