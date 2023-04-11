import { Component } from "react";
import Brands from "./Brands";
import Models from "./Models";
import FilteredBrands from "./FilteredBrands";
import FilteredModels from "./FilteredModels";
import Paginnation from "./Paggination";

import { observer, inject } from "mobx-react";

@inject("carStore")
@observer
class CarVendor extends Component {
  state = {
    searchBrand: "",
    searchModel: "",
    currentPage: 1,
    carsPerPage: 9,
  };

  // METODA KOJA ĆE DOHVATITI SVE AUTO PROIZVODACE IZ BAZE I SVE MODELE
  componentDidMount() {
    this.props.carStore.fetchBrands();
    this.props.carStore.fetchModels();
  }

  // PRETRAŽIVANJE PO PROIZVOĐAČU AUTA
  filterBrand = (event) => {
    this.setState({ searchBrand: event.target.value });
  };

  filterModel = (event) => {
    this.setState({ searchModel: event.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    // ŠALJE UPIT PREMA SERVERU KOJI SE POVEZUJE NA KOLEKCIJU S BRANDOVIMA I RADI PRETRAGU UPISANOG STRINGA
    if (this.state.searchBrand !== prevState.searchBrand) {
      this.props.carStore.fetchFilteredBrands(this.state.searchBrand);
    }

    // ŠALJE UPIT PREMA SERVERU KOJI SE POVEZUJE NA KOLEKCIJU S MODELIMA I RADI PRETRAGU UPISANOG STRINGA
    if (this.state.searchModel !== prevState.searchModel) {
      this.props.carStore.fetchFilteredModels(this.state.searchModel);
    }
  }

  paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

  render() {
    const { currentPage, carsPerPage } = this.state;

    const { models } = this.props.carStore;
    const indexOfLastPost = currentPage * carsPerPage;
    const indexOfFirstPost = indexOfLastPost - carsPerPage;
    const currentPosts = models.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div className="main-container">
        <div>
          <label htmlFor="search">
            <strong>Search by brand:</strong>
          </label>
          <input
            type="text"
            id="search"
            className="search-box"
            placeholder="Mercedes-Benz, Tesla, Ford..."
            onChange={this.filterBrand}
          />

          <section>
            {this.state.searchBrand === "" ? <Brands /> : <FilteredBrands />}
          </section>
        </div>
        <hr />
        <div>
          <label htmlFor="search-model">
            <strong>Search by model:</strong>
          </label>
          <input
            type="text"
            id="search-model"
            className="search-box"
            placeholder="X5, RAV4, Corrola..."
            onChange={this.filterModel}
          />

          <section>
            {this.state.searchModel === "" ? (
              <div>
                <Models modelsPerPage={currentPosts} />
                <Paginnation
                  carsPerPage={carsPerPage}
                  totalPosts={models.length}
                  paginate={this.paginate}
                />
              </div>
            ) : (
              <FilteredModels />
            )}
          </section>
        </div>
      </div>
    );
  }
}

export default CarVendor;
