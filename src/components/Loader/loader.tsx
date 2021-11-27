import React, { FC } from "react";
import ContentLoader from "react-content-loader";

export interface LoaderProps {
  isMobileMode: boolean;
}
const MyLoader: FC<LoaderProps> = ({ isMobileMode }) => (
  <>
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      viewBox="0 0 476 124"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="122" y="15" rx="3" ry="3" width="103" height="7" />
      <rect x="122" y="39" rx="3" ry="3" width="61" height="7" />
      <rect x="125" y="66" rx="3" ry="3" width="335" height="7" />
      {/* <circle cx="61" cy="56" r="48" /> */}
      {/* <rect x="369" y="16" rx="3" ry="3" width="21" height="7" />
      <rect x="402" y="16" rx="3" ry="3" width="21" height="7" />
      <rect x="439" y="17" rx="3" ry="3" width="21" height="7" /> */}
      <rect x="125" y="88" rx="3" ry="3" width="335" height="7" />
      <rect x="9" y="11" rx="20" ry="20" width="98" height="86" />
    </ContentLoader>
  </>
);

export default MyLoader;
