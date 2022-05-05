import React from 'react';

const Signup = () => {
  return (
    <div>
      <div class="modal-dialog">
<div class="modal-content">
         <div class="modal-body">
         <button className="btn btn-primary w-100 mb-4">
          <span className="fa fa-google me-2"></span> Sign in With Google
         </button>
         <button className="btn btn-primary w-100 mb-4">
          <span className="fa fa-facebook me-2"></span> Sign in With Facebook
         </button>
     
<form>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <div class="modal-footer">
  <button type="submit" class="btn btn-outline-primary w-100 mt-5">Submit</button>
  
  </div>
</form>
         </div> 
         
      </div>
      </div>
    </div>
  );
}

export default Signup;
