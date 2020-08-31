import { expect } from 'chai';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, Route } from 'react-router-dom';

import configureStore from '../../../lib/configureStore';
import SearchContainer from '../search';
import { FilterSelectorComponent } from '../filterSelector/filterSelector';
import ResultsTable from '../resultsTable';
import SearchBreadcrumbs from '../searchBreadcrumbs';
import { SearchControlsComponent } from '../searchControls';
import fixtureResponse from './fixtureResponse';
import { receiveResponse } from '../../../actions/search';

describe('Search', () => {
  it('should be able to render to an HTML string', () => {
    let store = configureStore();
    let htmlString = renderToString(
      <Provider store={store}>
        <Router>
          <Route component={SearchContainer} />
        </Router>
      </Provider>
    );
    expect(htmlString).to.be.a('string');
  });

  it('should be able to render after getting a response', () => {
    let store = configureStore();
    store.dispatch(receiveResponse(fixtureResponse, { q: 'kinase' }));
    let htmlString = renderToString(
      <Provider store={store}>
        <Router>
          <Route component={SearchContainer} />
        </Router>
      </Provider>
    );
    expect(htmlString).to.be.a('string');
  });
});

describe('SearchBreadcrumbs', () => {
  it('should be able to render to an HTML string', () => {
    let htmlString = renderToString(
      <Router>
        <SearchBreadcrumbs queryParams={{ page: 0, query: 'actin' }} total={5} />
      </Router>
    );
    expect(htmlString).to.be.a('string');
  });
});


describe('SearchControls', () => {
  it('should be able to render to an HTML string', () => {
    let htmlString = renderToString(
      <Router>
        <SearchControlsComponent
          currentPage={1}
          isTable
          queryParams={{}}
          totalPages={5}
        />
      </Router>
    );
    expect(htmlString).to.be.a('string');
  });
});

describe('ResultsTable', () => {
  it('should be able to render to an HTML string', () => {
    let htmlString = renderToString(<ResultsTable entries={[]} />);
    expect(htmlString).to.be.a('string');
  });
});

describe('FilterSelector', () => {
  it('should be able to render to an HTML string', () => {
    let htmlString = renderToString(
      <Router>
        <FilterSelectorComponent aggregations={[]} />
      </Router>
    );
    expect(htmlString).to.be.a('string');
  });
});
