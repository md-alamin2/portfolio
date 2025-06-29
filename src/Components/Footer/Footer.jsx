import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content py-10 mt-30">
      <aside>
        <p className="font-semibold">
          Copyright © {new Date().getFullYear()} - All right reserved by MD. Al-amin
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
