import routes from "@/utils/routes";
import Link from "next/link";
import React from "react";
import { CiLight } from "react-icons/ci";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="lg:mt-8 flex justify-between items-center">
      <Link href={routes.landing()} className="font-extrabold text-3xl">
        React UI Hub
      </Link>
      <div className="flex justify-between">
        <div className="flex items-center gap-x-8">
          <Link href={routes.components()}>Компоненты</Link>
          <Link href={routes.community()}>Сообщество</Link>
          <Link href={routes.about()}>О нас</Link>
        </div>

        <div className="inline-block mx-5 min-h-[1em] w-0.5 self-stretch bg-gray-400 dark:bg-white/10"></div>

        <div className="flex gap-x-6 items-center">
          <div className="cursor-pointer">
            <CiLight size={32} />
          </div>
          <Link target="_blank" href={routes.social.github()}>
            <FaGithub size={32} />
          </Link>
          <Link target="_blank" href={routes.social.telegram()}>
            <FaTelegramPlane size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};
