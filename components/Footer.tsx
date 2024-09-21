import React from "react";
import { Button, Divider, Input, Link } from "@nextui-org/react";
import { QuoteUpIcon } from "hugeicons-react";

const Footer = () => {
  const styles = {
    base: "",
    mainWrapper: "",
    inputWrapper:
      "rounded-md py-4 bg-transparent border-1 border-accent group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white data-[hover=true]:border-accent group-data-[focus=true]:border-grey-900 shadow",
    innerWrapper: "",
    input: "",
    clearButton: "",
    helperWrapper: "",
    description: "",
    errorMessage: "",
  };

  return (
    <div className="h-[350px] w-[100vw] bg-white shadow-2xl border-t-1 border-grey-100/20 mt-32 z-50">
      <div className="flex flex-col gap-10 max-w-[1280px] mx-auto">
        <div className="flex gap-5 w-full mt-12">
          <div className="w-1/3 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="w-[56px] h-[56px]">
                <img
                  src="https://avatars.githubusercontent.com/u/79596248?v=4"
                  className="h-full w-full object-cover rounded-md border-1 border-accent mt-0.5"
                />
              </div>
              <div className="flex flex-col h-[56px] gap-1 items-start">
                <h3>Arnas Klimašauskas</h3>
                <div className="flex gap-2 items-center">
                  <Link href="https://github.com/arnas78">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
                      height={18}
                      width={18}
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/in/arnas-klimasauskas/">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                      height={18}
                      width={18}
                    />
                  </Link>
                  <Link href="https://www.instagram.com/arnaskli/">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                      height={18}
                      width={18}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-grey-700 italic">
              My goal with “Wine shop” was to explore NextUI library and use it
              with Next.js, Typescript and Tailwind.
            </p>
          </div>
          <div className="w-1/6 flex flex-col">
            <h3>Products</h3>
            <div className="mt-4 flex flex-col gap-1 text-grey-500">
              <h4 className="cursor-pointer transition ease-in-out hover:text-accent w-fit">
                Winemaker
              </h4>
              <h4 className="cursor-pointer transition ease-in-out hover:text-accent w-fit">
                Shipping
              </h4>
              <h4 className="cursor-pointer transition ease-in-out hover:text-accent w-fit">
                Trademark
              </h4>
              <h4 className="cursor-pointer transition ease-in-out hover:text-accent w-fit">
                Legal
              </h4>
            </div>
          </div>
          <div className="w-1/6 flex flex-col">
            <h3>About us</h3>
            <div className="mt-4 flex flex-col gap-1 text-grey-500">
              <h4 className="cursor-pointer transition ease-in-out hover:text-accent w-fit">
                Careers
              </h4>
              <h4 className="cursor-pointer transition ease-in-out hover:text-accent w-fit">
                Blog
              </h4>
              <h4 className="cursor-pointer transition ease-in-out hover:text-accent w-fit">
                Reviews
              </h4>
              <h4 className="cursor-pointer transition ease-in-out hover:text-accent w-fit">
                Socials
              </h4>
            </div>
          </div>
          <div className="w-1/3 flex flex-col">
            <h3>Subscribe</h3>
            <p className="mt-4 text-grey-500">
              Enroll to our weekly newsletter
            </p>
            <div className="flex gap-3 mt-2">
              <Input placeholder="Enter your email" classNames={styles} />
              <Button className="rounded-md bg-accent text-white px-6 shadow">
                Sign me up
              </Button>
            </div>
            <p className="mt-3 text-grey-500">
              By subscribing you agree to our Privacy Policy
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <Divider />
          <div className="flex justify-between items-center mt-6 text-grey-500">
            <h4>&copy; Wine shop, Arnas Klimašauskas, 2024</h4>
            <div className="flex gap-7">
              <h4>Terms</h4>
              <h4>Privacy</h4>
              <h4>Cookies</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
