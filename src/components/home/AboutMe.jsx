import React from "react";

import axios from "axios";
import { Jumbotron } from "./migration";
import { images } from "../../commonData/images";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);



  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <img
              className="border border-secondary rounded-circle"
              src={images('gab')}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center">

          Hi, I'm <b>Gabriel Gonzalez</b> , a <b>Systems Engineer</b> with a passion for <b>IT infrastructure</b> and technology with expertise in managing various types of IT environments, I specialize in <b>Server and Network administration, Virtualization, and Cloud solutions</b>. 
          My technical toolkit includes <b>Windows Server, VMware ESXi, Hyper-V, PowerShell, Microsoft 365, Azure</b> and <b>network technologies</b> from <b>Cisco , Meraki , Sonicwall , Fortigate , Watchguard </b>and <b>Ubiquiti</b> . I thrive on solving complex IT challenges and continuously improving technological ecosystems. Always eager to take on new challenges, I'm committed to pushing the boundaries of technology and expanding my skills in an ever-evolving IT landscape.
          </p>
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href="#certifications"
                
              >
                Certifications
              </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
