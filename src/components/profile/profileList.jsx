import React from "react";
import classes from "./profileList.module.css";
import Profile from "./profile";
import member1 from "../../assets/feriha.png";
import member2 from "../../assets/adam.png";
import member3 from "../../assets/merlin.png";

const members = [
  {
    id: 1,
    image: member1,
    name: "Emily",
    job: "Web Designer",
    company: "Lacivert Bilişim",
    link: "#",
  },
  {
    id: 2,
    image: member2,
    name: "Adam",
    job: "Backend Developer",
    company: "Jotform",
    link: "#",
  },
  {
    id: 3,
    image: member3,
    name: "Vernie",
    job: "Devops Engineer",
    company: "Coensio",
    link: "#",
  },
];

const ProfileList = () => {
  return (
    <section className={classes.center}>
      <div>
        <h1>Team Members</h1>
        <div className={classes["profile-container"]}>
          {members.map((member) => (
            <Profile member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileList;
