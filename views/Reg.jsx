const React = require('react');
const Layout = require('./Layout');

module.exports = function Reg() {
  return (
    <Layout>
      <form method="post" action="/api/auth/reg">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Write your name</label>
          <input name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Registration</button>
      </form>
    </Layout>
  );
}
