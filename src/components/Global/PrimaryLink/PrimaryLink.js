import Link from "next/link";
import React from "react";

const PrimaryLink = ({ link, children, className }) => {
  return (
    <Link
      href={link}
      className={`bg-primary block w-fit text-white text-sm capitalize rounded-md text-center border p-2 ${className}`}
    >
      {children}
    </Link>
  );
};

export default PrimaryLink;
