import React, { Component } from 'react';

class LoginPage extends Component {
  render() {
    return(
      <div class="container">
          <div class="row">
            <div class="h-100 col align-items-center">
            <div class="card mt-5">
            <div class="card-header">
              <h1>Log in</h1>
            </div>
              <div class="card-body d-grid gap-3">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <br/>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                  <br/>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
            </div>
          </div>
      </div>
    )
  }
}

export default LoginPage;
