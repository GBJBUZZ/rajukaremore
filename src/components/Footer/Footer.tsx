"use client";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";
import { TfiFacebook } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { useTranslations } from "use-intl";

export default function Footer() {
  const t1 = useTranslations("nav");
  const t2 = useTranslations("footer");
  const t3 = useTranslations();
  return (
    <section className="px-8 xl:px-40 relative bg-[var(--primary-clr)]">
      <footer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-white gap-4 py-20">
        <div>
          <Link href={"/"} className="text-3xl font-[600]">
              {t1("name")}
            {/* {t3("lang") === "English" ? (
              <Image
                src={"/logo.svg"}
                alt="instagram"
                width={500}
                height={500}
                className="max-w-[300px]"
              />
            ) : (
              <Image
                src={"/logo-marathi.svg"}
                alt="instagram"
                width={500}
                height={500}
                className="max-w-[300px]"
              />
            )} */}
          </Link>
          <p className="mt-8">{t2("text")}</p>
        </div>
        <div className="md:pl-8">
          <h5 className="text-2xl my-8 font-[600] montserrat">
            {t2("explore")}
          </h5>
          <div className="md:mt-12 space-y-2">
            <Link href="/biography" className="block">
              {t1("biography")}
            </Link>
            <Link href="/political-journey" className="block">
              {t1("political journey")}
            </Link>
            <Link href="/#services" className="block">
              {t1("public services")}
            </Link>
            <Link href="/media-and-coverage" className="block">
              {t1("media coverage")}
            </Link>
            <Link href="/gallery" className="block">
              {t1("gallery")}
            </Link>
          </div>
        </div>
        <div className="">
          <h5 className="text-2xl my-8 font-[600] montserrat">
            {t2("services")}
          </h5>
          <div className="md:mt-12 space-y-2">
            <Link href="/services/sports" className="block">
              {t1("sports")}
            </Link>
            <Link href="/services/agriculture" className="block">
              {t1("agriculture")}
            </Link>
            <Link href="/services/employment" className="block">
              {t1("employment")}
            </Link>
            <Link href="/services/education" className="block">
              {t1("education")}
            </Link>
            <Link href="/services/healthcare" className="block">
              {t1("healthcare")}
            </Link>
          </div>
        </div>
        <div className="">
          <h5 className="text-2xl my-8 font-[600] montserrat">
            {t2("contact us")}
          </h5>
          <div className="md:mt-12 space-y-2">
            <div>
              <div className="flex items-center flex-wrap gap-1">
                <MdOutlineLocationOn size={24} className="inline" />
                <p className="text-lg font-[600]">{t2("location")}</p>
              </div>
              <p className="ml-8">{t2("address")}</p>
            </div>
            <div>
              <div className="flex items-center flex-wrap gap-1">
                <FaRegEnvelope size={24} className="inline" />
                <p className="text-lg font-[600]">{t2("mail us")}</p>
              </div>
              <Link
                href={"mailto:rajukaremore@gmail.com"}
                className="ml-8"
              >
                rajukaremore@gmail.com
              </Link>
            </div>
            <br />
            <div className="flex items-center gap-2 w-fit pr-2 border-r-2 border-[#f4f4f4] text-[var(--primary-txt)]">
              <Link
                href={"https://www.facebook.com/BhandaraShivSena/"}
                target="_blank"
                className="bg-[#F4F4F4] p-3 rounded-lg"
              >
                <TfiFacebook size={20} />
              </Link>
              <Link
                href={"https://x.com/NBhondekar61"}
                target="_blank"
                className="bg-[#F4F4F4] p-3 rounded-lg"
              >
                <RiTwitterXLine size={20} />
              </Link>
              <Link
                href={"https://www.instagram.com/narendra_bhondekar/"}
                target="_blank"
                className="bg-[#F4F4F4] p-3 rounded-lg"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href={
                  "https://www.youtube.com/@narendrabhondekar-jr5iv/featured"
                }
                target="_blank"
                className="bg-[#F4F4F4] p-3 rounded-lg"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
