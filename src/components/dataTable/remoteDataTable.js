import React, { Component } from 'react';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PropTypes from 'prop-types';

const textSorter = (textRender, field) => {
  return (a, b, order) => {
    if (order === 'desc') {
      return textRender(a[field]).localeCompare(textRender(b[field]));
    } else {
      return textRender(b[field]).localeCompare(textRender(a[field]));
    }
  };
};

const textFilter = {
  type: 'TextFilter',
  delay: 100,
  placeholder: ' '
};

class RemoteDataTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { columns, data, filename } = this.props;
    const options = {
      exportCSVSeparator: '\t',
      exportCSVText: 'Download',
      toolbarPosition: 'bottom', //move download button to the bottom
      paginationPosition: 'top',
      sizePerPage: 6,
      sizePerPageList: [ {
        text: '6', value: 6
      }, {
        text: 'All', value: 9
      } ],
    };
    return (
      <BootstrapTable
        bordered={false}
        csvFileName={filename}
        data={data}
        exportCSV
        options={options}
        ref={(table) => {this.tableRef = table;}}
        version='4'
      >
        {
          columns.map((col, idx) =>
            <TableHeaderColumn
              csvFormat={col.asText}
              csvHeader={col.label}
              dataField={col.field}
              dataFormat={col.format}
              dataSort={col.sortable}
              filter={col.filterable ? textFilter : null}
              hidden={col.hidden}
              isKey={col.isKey}
              key={idx}
              sortFunc={col.asText && textSorter(col.asText, col.field)}
            >
              {col.label}
            </TableHeaderColumn>
          )
        }
      </BootstrapTable>
    );
  }
}

RemoteDataTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.arrayOf(PropTypes.object),
  filename: PropTypes.string,
};

export default RemoteDataTable;
