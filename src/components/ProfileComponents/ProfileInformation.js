import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

import { EditIcon, FacebookIcon, GearWorkIcon, InstagramIcon } from "../Icons";

const ProfileInformation = ({ role, setActiveTab }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="sticky top-0 h-[100dvh] shrink-0 md:w-[380px]">
      <div className="bg-[#F9F9F9] h-full px-6 pt-4 flex-col flex ltr:rounded-bl-[80px] rtl:rounded-br-[80px]  overflow-hidden">

        <h2 className="flex gap-2 text-xl justify-between mt-6 items-center text-primary font-medium">
          {fetchWord("profile_information", lang)}
          <button href="#edit" onClick={() => setActiveTab({ name: 'edit_profile' })}>
            <EditIcon className="text-yellow-500 h-4 w-4" />
          </button>
        </h2>
        <ul className="flex flex-col gap-4 mt-8">
          <li className="flex gap-3">
            <span className="flex-1 text-lead max-w-[140px] ">
              {fetchWord("user_name", lang)}
            </span>
            <span className="flex-1 font-medium">monga</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-1 text-lead max-w-[140px] ">
              {fetchWord("email", lang)}
            </span>
            <span className="flex-1 font-medium">monga@monga.com</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-1 text-lead max-w-[140px] ">
              {fetchWord("phone_number", lang)}
            </span>
            <span className="flex-1 font-medium">+02 893 983 932</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-1 text-lead max-w-[140px] ">
              {fetchWord("password", lang)}
            </span>
            <span className="flex-1 font-medium">*********</span>
          </li>
          {role === 'company' ? (
            <>
              <li className="flex gap-3">
                <span className="flex-1 text-lead max-w-[140px] ">
                  {fetchWord("location", lang)}
                </span>
                <span className="flex-1 font-medium">
                  Istanbul - ..................{" "}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-1 text-lead max-w-[140px] ">
                  {fetchWord("tax_number", lang)}
                </span>
                <span className="flex-1 font-medium">125 4 5 85 55 55</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-1 text-lead max-w-[140px] ">
                  {fetchWord("company_license", lang)}
                </span>
                <Image
                  src="/images/ConnecticutBusinessLicense-1.png"
                  alt="company license"
                  height={50}
                  width={80}
                />
              </li>
              <li className="flex gap-3">
                <span className="flex-1 text-lead max-w-[140px] ">
                  {fetchWord("website", lang)}
                </span>
                <span className="flex-1 font-medium">125 4 5 85 55 55</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-1 text-lead max-w-[140px] ">
                  {fetchWord("social_media", lang)}
                </span>
                <div className="flex gap-2">
                  <Link href="">
                    <FacebookIcon className="w-5 h-5 text-secondary" />
                  </Link>
                  <Link href="">
                    <InstagramIcon />
                  </Link>
                </div>
              </li>
            </>
          ) : null}
        </ul>
        <div className="relative mt-auto">
          <span className="absolute bottom-0  rtl:-left-5 ltr:-right-5">
            <GearWorkIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
