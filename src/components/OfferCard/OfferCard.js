import { Layout } from "@/components/Layout/Layout";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

import PrimaryLink from "../Global/PrimaryLink/PrimaryLink";

const OfferCard = ({ offer, hideButton }) => {
  const { lang } = useContext(LanguageContext);
  console.log(offer);
  return (
    <div className="flex gap-4 flex-col p-4 rounded-md bg-white">
      <div className="flex gap-4">
        <Image src={offer?.image} alt={offer?.name} width={140} height={200} />
        <div className="flex flex-col gap-3 flex-1">
          <h3 className="font-medium text-lg">{offer?.name}</h3>
          <span className="text-secondary text-sm">#{offer?.offerNumber}</span>
          <p className="text-lead text-sm">{offer?.date}</p>
        </div>
      </div>
      {hideButton ? null : (
        <PrimaryLink
          link={`/offers/${offer?.offerNumber}`}
          className={`!bg-transparent !border-primary !w-full !block !text-primary !hover:bg-primary hover:text-white`}
        >
          {fetchWord("view_offers", lang)}
        </PrimaryLink>
      )}
    </div>
  );
};

export default OfferCard;
