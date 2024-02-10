import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const PeopleCard = ({ item, element }) => {
  const { store, actions } = useContext(Context);

  function checkFavorite(elementId) {
    return store.favorites.some((item) => item.id == `${element}/${elementId}`);
  }

  function imgError(e) {
    e.target.src = "https://via.placeholder.com/204x214?text=Photo have we not";
  }

  return (
    <div
      className="card p-0"
      style={{ width: "18em", height: "auto", margin: "10px" }}
    >
      <img
        src={item.img}
        onError={imgError}
        className="card-img-top m-0 p-0"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title mb-4 mt2"> {item.name}</h5>
        <div className="d-flex justify-content-between">
          <Link
            to={`/${element}/${item.uid}`}
            className="btn btn-outline-primary"
            style={{marginTop: "5%"}}
          >
            Learn more!
          </Link>
          <button
            href="#"
            className="btn btn-outline-warning"
            style={{marginTop: "5%"}}
            onClick={() =>
              actions.addFavorites(`${element}/${item.uid}`, item.name)
            }
          >
            <i
              className={`fa-solid fa-crown${
                checkFavorite(item.uid) ? "": ""
              }`}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};