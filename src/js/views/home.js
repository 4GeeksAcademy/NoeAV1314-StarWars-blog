import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ListCards } from "../views/cards";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      {["planets", "people", "vehicles"].map((element) => (
        <ListCards key={element} element={element} />
      ))}
    </div>
    );
  };

	// <div className="text-center mt-5">
	
  
  
  // <div className="card-group" >
  //       <div className="card one">
  //         <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
  //         <div className="card-body">
  //           <h5 className="card-title">Card title</h5>
  //           <p className="card-text">Some content</p>
  //         </div>
  //         <div className="card-footer d-grid gap-2 d-md-flex justify-content-md-end">
	// 	  	<button className="btn btn-outline-primary btn-sm">Learn more!</button>
	// 		<button className="btn btn-outline-warning btn-sm">Star icon</button>
  //         </div>
  //       </div>



  //       <div className="card">
  //         <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
  //         <div className="card-body">
  //           <h5 className="card-title">Card title</h5>
  //           <p className="card-text">Some content.</p>
  //         </div>
  //         <div className="card-footer d-grid gap-2 d-md-flex justify-content-md-end">
	// 	  	<button className="btn btn-outline-primary btn-sm">Learn more!</button>
	// 		<button className="btn btn-outline-warning btn-sm">Star icon</button>
  //         </div>
  //       </div>

  //       <div className="card">
  //         <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
  //         <div className="card-body">
  //           <h5 className="card-title">Card title</h5>
  //           <p className="card-text">Some content.</p>
  //         </div>
  //         <div className="card-footer d-grid gap-2 d-md-flex justify-content-md-end">
	// 	  	<button className="btn btn-outline-primary btn-sm">Learn more!</button>
	// 		<button className="btn btn-outline-warning btn-sm">Star icon</button>
  //         </div>
  //       </div>

  //       <div className="card">
  //         <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
  //         <div className="card-body">
  //           <h5 className="card-title">Card title</h5>
  //           <p className="card-text">Some content</p>
  //         </div>
  //         <div className="card-footer d-grid gap-2 d-md-flex justify-content-md-end">
	// 	  	<button className="btn btn-outline-primary btn-sm">Learn more!</button>
	// 		<button className="btn btn-outline-warning btn-sm">Star icon</button>
  //         </div>
  //       </div>
  //   </div>
	// </div>
