import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className=" bg-black text-white font-lato font-light  md:px-48 px-4  pt-8 pb-2 flex flex-col gap-8 ">
      <div className="flex justify-between md:flex-row flex-col md:gap-0 gap-6 ">
        <div className="flex md:gap-24 gap-6 md:flex-row flex-col">
          <div className="flex flex-col gap-6 text-sm md:border-none border-b border-tgrey md:pb-0 pb-4">
            <div className="text-base font-medium  ">Contact Us</div>
            <div className="flex gap-6 items-center">
              <PhoneIcon />
              <div>
                <p>+91 9053531243</p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <Link
                to="contact"
                smooth={true}
                offset={-10}
                duration={500}
                className=" cursor-pointer"
              >
                <EmailIcon />
              </Link>
              <div>
                <p>info@sumiyo.com</p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <a
                href="https://goo.gl/maps/oAVmkN8q9MWMSmtP9?coh=178572&entry=tt"
                target="_blank"
              >
                <PlaceOutlinedIcon />
              </a>
              <div>
                <a
                  href="https://goo.gl/maps/oAVmkN8q9MWMSmtP9?coh=178572&entry=tt"
                  target="_blank"
                >
                  Head Office: H. N. 1445,
                  <br />
                  Sec-4, Rewari,
                  <br />
                  Jhajjar (Hr.) - 123401
                </a>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <a
                href="https://goo.gl/maps/tFHHqZspE5JCJ27m9?coh=178572&entry=tt"
                target="_blank"
              >
                <PlaceOutlinedIcon />
              </a>
              <div>
                <a
                  href="https://goo.gl/maps/tFHHqZspE5JCJ27m9?coh=178572&entry=tt"
                  target="_blank"
                >
                  Work Shop: VPO Baghpur,
                  <br />
                  Beri (124201),
                  <br />
                  (Hr.) - 123401
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:text-sm text-xs md:border-none border-b border-tgrey md:pb-0 pb-4">
            <div className="text-base font-medium  ">About Sumiyo</div>
            <div className="flex gap-6 items-center text-tgrey">
              <AnnouncementIcon />
              <div>
                <p>Career & News</p>
              </div>
            </div>
            <div className="flex gap-6 items-center  text-tgrey">
              <InfoIcon />
              <div>
                <p>About Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8 md:justify-start justify-center ">
          <a href="https://in.linkedin.com/" target="_blank">
            <LinkedInIcon className=" md:h-8 md:w-8 cursor-pointer" />
          </a>
          <a href="https://twitter.com/SumiyoLtd11695" target="_blank">
            <TwitterIcon className=" md:h-8 md:w-8 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/sumiyotechnology/" target="_blank">
            <InstagramIcon className="md:h-8 md:w-8 cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="flex justify-between md:text-sm text-xs md:flex-row flex-col md:gap-4 gap-0">
        <div>© 2023 Sumiyo Technology, Inc. All Rights Reserved</div>
        <div className="flex gap-8 text-tgrey text-sm">
          <p>Term of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
