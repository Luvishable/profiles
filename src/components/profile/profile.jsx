import React from "react";
import classes from "./profile.module.css";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { IconContext } from "react-icons";
import Card from "../UI/card";

const Profile = (props) => {
  const { id, image, name, job, company, link } = props.member;
  return (
    <Card>
      <div className={classes.profile} key={id}>
        <img src={image} alt={name} />
        <div className={classes["profile-content"]}>
          <h3>About Me</h3>
          <div className={classes.text}>
            <p>Name :</p>
            <p>{name}</p>
          </div>
          <div className={classes.text}>
            <p>Job :</p>
            <p>{job}</p>
          </div>
          <div className={classes.text}>
            <p>Company :</p>
            <p>{company}</p>
          </div>
          <IconContext.Provider value={{ color: "#666", size: "20px" }}>
            <div className={classes.icons}>
              <AiOutlineTwitter />
              <AiOutlineGithub />
              <BsPinterest />
            </div>
          </IconContext.Provider>
          <div className={classes.btn}>
            <a href={link} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
