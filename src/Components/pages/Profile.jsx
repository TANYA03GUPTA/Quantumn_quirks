import React from "react";
import { Container } from "react-bootstrap";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "../pages/Profile.css";
//import Model from "../pages/Avatar00.jsx";

//3d model

export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-nav">
        <h3>Account</h3>
        <ul>
          <li>Overview</li>
          <li>Orders & Returns</li>
          <hr />
          <li>Coupons</li>
          <li>Myntra Credit</li>
          <li>MyCash</li>
          <hr />
          <li>Profile</li>
          <li>Saved Cards</li>
          <li>Saved UPI</li>
          <li>Saved Wallets/BNPL</li>
          <li>Addresses</li>
          <hr />
          <li>Myntra Insider</li>
          <li>Delete Account</li>
        </ul>
      </div>
      <div className="profile-details">
        <h2>User Details</h2>
        <div className="details-box">
          <p>
            <strong>Full Name:</strong> Shanti Priya
          </p>
          <p>
            <strong>Mobile Number:</strong> 99999888856655
          </p>
          <p>
            <strong>Email ID:</strong> FashionPulse01@gmail.com
          </p>
          <p>
            <strong>Gender:</strong> FEMALE
          </p>
          <p>
            <strong>Date of Birth:</strong> - not added -
          </p>
          <p>
            <strong>Location:</strong> - not added -
          </p>
          <p>
            <strong>Alternate Mobile:</strong> - not added -
          </p>
          <p>
            <strong>Hint Name:</strong> - not added -
          </p>
          <button className="edit-button">EDIT</button>
        </div>
      </div>
      <div className="profile-3dmodel">
        <div className="video-wrapper">
          <video className="vertical-video" muted autoPlay loop>
            <source src="images/avat.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};
