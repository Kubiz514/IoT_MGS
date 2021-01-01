import React, { Component } from 'react';

class MainPage extends Component {
  render() {
    return(
          <div class="container">
              <table class="table">
                  <thead>
                      <tr>
                      <th scope="col">#</th>
                      <th scope="col">Device</th>
                      <th scope="col">On/Off</th>
                      <th scope="col">State</th>
                      <th scope="col"></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>
                        <button type="button" class="btn btn-success">On</button>
                      </td>
                      <td class="text-success">
                        Online
                        </td>
                      <td>
                        <button type="button" class="btn btn-info text-light">Details</button>
                      </td>
                      </tr>
                      <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>
                        <button type="button" class="btn btn-danger">Off</button>
                      </td>
                      <td class="text-success">
                        Online
                      </td>
                      <td>
                        <button type="button" class="btn btn-info text-light">Details</button>
                      </td>
                      </tr>
                      <tr>
                      <th scope="row">3</th>
                      <td >Larry the Bird</td>
                      <td>
                        <button type="button" class="btn btn-danger">Off</button>
                      </td>
                      <td class="text-danger">
                        Offline
                        </td>
                      <td>
                        <button type="button" class="btn btn-info text-light">Details</button>
                      </td>
                      </tr>
                  </tbody>
              </table>
          </div>
    )
  }
}

export default MainPage;
