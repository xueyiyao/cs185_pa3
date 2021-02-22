import React, { Component } from "react";
import "./Table.css";

export class Table extends Component {
  render() {
    return (
      <div className="content table">
        <h2>Projects</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://github.com/rhiannaso/SpoilAlert">SpoilAlert</a>
              </td>
              <td>
                Android App that keeps track of grocery items and alerts users
                when they are about to expire
              </td>
              <td>2020</td>
            </tr>
            <tr>
              <td>
                <a href="https://github.com/ReciPull/recipull.github.io">
                  Recipull
                </a>
              </td>
              <td>
                Web application that takes list of ingredients and finds recipes
                that contains those ingredients
              </td>
              <td>2018</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
