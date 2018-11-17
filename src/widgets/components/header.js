import React from "react";
import "./header.css";

const Header = props => (
  <div className="Header">
    <form 
      className="Search" 
      onSubmit={props.handleSubmit}
    >
      <input
        ref={props.setRef}
        className="Search-input"
        type="text"
        placeholder="Busca tu video favorito"
        name="search"
        onChange={props.handleChange}
        value={props.value}
      />
    </form>
    <div className="User">
      <p>
        {props.user.username}
      </p>
      <div>
        <img src={props.user.picture} width={80}/>
      </div>
    </div>
  </div>
);

export default Header;
