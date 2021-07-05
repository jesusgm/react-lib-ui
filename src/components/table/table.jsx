import React, { Component } from "react";
import Cell from "./components/cell";

import "./styles.css";

export class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      pageSize: (props.pagination && props.pagination.pageSize) || 10,
    };

    this.renderHeader = this.renderHeader.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.pageSizeChange = this.pageSizeChange.bind(this);
  }

  nextPage() {
    const { rows } = this.props;
    const { page, pageSize } = this.state;

    const numPages = Math.ceil(rows.length / pageSize);
    if (page + 1 < numPages) {
      this.setState({
        page: this.state.page + 1,
      });
    }
  }

  prevPage() {
    const { page } = this.state;

    if (page > 0) {
      this.setState({
        page: this.state.page - 1,
      });
    }
  }

  pageSizeChange(event) {
    this.setState({
      page: 0,
      pageSize: parseInt(event.target.value, 10),
    });
  }

  renderHeader() {
    const { headers } = this.props;
    if (!headers) {
      return null;
    }
    return (
      <thead className="table-header table-row">
        <tr>
          {headers.map((header, i) => (
            <Cell key={i} head className="table-header table-cell">
              {header}
            </Cell>
          ))}
        </tr>
      </thead>
    );
  }

  renderBody() {
    const { rows, pagination } = this.props;
    const { page, pageSize } = this.state;

    const items = !pagination
      ? rows
      : rows.slice(page * pageSize, page * pageSize + pageSize);

    // console.log("inicio: " + page * pageSize);
    // console.log("fin: " + (page * pageSize + pageSize));
    // console.log(items);

    return (
      <tbody className="table-boddy">
        {items.map((row, i) => {
          return (
            <tr key={i} className={`table-row ${i % 2 === 0 ? "pair" : "odd"}`}>
              {Object.values(row).map((cell, j) => (
                <Cell key={`${i}${j}`} className="table-cell">
                  {cell}
                </Cell>
              ))}
            </tr>
          );
        })}
      </tbody>
    );
  }

  renderFooter() {
    const { rows, pagination } = this.props;
    const { page, pageSize } = this.state;

    const numPages = Math.ceil(rows.length / pageSize);
    if (!pagination) {
      return null;
    }
    return (
      <tfoot className="table-footer">
        <tr>
          <td colSpan="0">
            <span className="pageSize">
              <select onChange={this.pageSizeChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
            </span>
            <span className="pagination">
              Page {page + 1} of {numPages}
            </span>
            <span className="pagination-change">
              <span
                className={page === 0 ? "disabled" : ""}
                onClick={() => this.prevPage()}
              >
                {"<"}
              </span>
              <span
                className={page + 1 >= numPages ? "disabled" : ""}
                onClick={() => this.nextPage()}
              >
                {">"}
              </span>
            </span>
          </td>
        </tr>
      </tfoot>
    );
  }

  render() {
    return (
      <table className={`table`}>
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </table>
    );
  }
}
