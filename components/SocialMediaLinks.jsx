import { CustomTooltip } from "./Tooltip";
import { socialMediaLinks } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaLinks() {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((link, i) => (
        <CustomTooltip title={link.name} placement="top" arrow followCursor>
          <a href={link.link} rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon size="2x" className="mr-2" key={i} icon={link.icon} />
          </a>
        </CustomTooltip>
      ))}
    </div>
  );
}
