import React from "react";
import logo from "../assets/Heaven Estate.gif";
import {SiGmail} from "react-icons/si"
import { Footer, TextInput } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo1 from '../assets/emoLogoCircular(1).png'
export const MyFooter = () => {
  return (
    <Footer className="px-4 lg:px-14 mx-auto bg-black py-16" style={{width:"100%"}}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="space-y-10 mr-4">
            <a
              className="text-2xl font-semibold flex items-center space-x-3"
              href="/"
            >
              <img
                className="w-2xl inline-block items-center"
                src={logo}
                alt="Imagem do logo"
              />
              {/*<span className="text-white">Heaven Estate</span>*/}
            </a>
            <div className="text-white">
              <p className="mb-1">Copyright © 2024 Heaven Estate</p>
              <p>All rights reserved</p>
            </div>
            <div className="mt-4 flex space-x-6 sm:mt-0">
                <img src={logo1} className="w-14 h-10"/>
              <Footer.Icon href="#" icon={BsGithub} className="text-white" />
              <SiGmail className="bg-white w-7 h-5" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-0 mt-6 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title
                title="Company"
                className="text-white font-bold text-xl"
              />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-neutralSilver">
                  About us
                </Footer.Link>
                <Footer.Link href="#" className="text-neutralSilver">
                  Blog
                </Footer.Link>
                <Footer.Link href="#" className="text-neutralSilver">
                  Contact us
                </Footer.Link>
                <Footer.Link href="#" className="text-neutralSilver">
                  Pricing
                </Footer.Link>
                <Footer.Link href="#" className="text-neutralSilver">
                  Testimonials
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Support"
                className="text-white font-bold text-xl"
              />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-neutralSilver">
                  Help center
                </Footer.Link>
                <Footer.Link href="#" className="text-neutralSilver">
                  Terms of service
                </Footer.Link>
                <Footer.Link href="#" className="text-neutralSilver">
                  Legal
                </Footer.Link>
                <Footer.Link href="#" className="text-neutralSilver">
                  Privacy policy
                </Footer.Link>
                <Footer.Link href="#" className="text-neutralSilver">
                  Status
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Stay up to date"
                className="text-white font-bold text-xl"
              />
              <Footer.LinkGroup col>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="Your email address"
                />
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};
