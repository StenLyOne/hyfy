/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SocialMediaRender } from "src/components/ui/SocialMediaRender";
import { GlobalSettingData } from "src/lib/types/globalSetting";
import { FooterData } from "src/lib/types/sections/footer";

export function Footer({
  data,
  global,
}: {
  data: FooterData;
  global: GlobalSettingData;
}) {
  const { columns } = data;
  const { logo, socialMedia } = global;
  return (
    <footer className=" bg-white w-full  z-3 relative">
      <div className="container !py-0 !pt-[100px] !pb-10 space-y-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="space-y-10">
            <img src={logo} alt="" />
            <div className="flex gap-5">
              {socialMedia.map((media, index) => (
                <SocialMediaRender data={media} key={index} />
              ))}
            </div>
          </div>
          {columns.map((column, idx) => (
            <div key={idx}>
              <h4 className="mb-6 !text-[14px] font-medium uppercase text-gray-400">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, i) => {
                  const isExternal = link.type === "external";
                  const href =
                    link.type === "anchor"
                      ? `#${link.url.replace("#", "")}`
                      : link.url;

                  return (
                    <li key={i}>
                      <a
                        href={href}
                        target={isExternal ? "_blank" : "_self"}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="text-black font-medium body-small leading-[100%] transition-color duration-200 hover:text-primary "
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full h-0.5 bg-gray-100"></div>
        <div className="flex justify-between">
          <p>© 2025 Hyfe Inc. All Rights Reserved.</p>
          <Link
            className="text-[14px] font-medium text-black hover:text-primary duration-200"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
