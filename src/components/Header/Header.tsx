import React, { FC, useState } from "react";
import { SmallLogo } from "../Logo/LogoStyle";
import SearchElement from "../Search/SearchElement";
import {
  HeaderStyle,
  IconsContainer,
  LogoContainer,
  SearchContainer,
  UserStyle,
} from "./HeaderStyle";
import Search from "../../assets/search.svg";
import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownContainer,
  DropdownItem,
  DropdownListContainer,
  DropdownListLogout,
} from "../Dropdown/DropdownStyle";
import { SmallSearchIcon } from "../Button/ButtonStyle";
import SmallSearch from "../Search/SmallSearch";
import { getApi } from "../../store/news-actions";
import { useDispatch } from "react-redux";
import { newsActions } from "../../store/news-slice";

const HeaderElement: FC = () => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isSmallSearchClicked, setIsSmallSearch] = useState(false);
  const { logout } = useAuth0();
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const toggling = () => {
    setIsLogoutOpen((prevIsOpen) => !prevIsOpen);
  };
  const handleSmallScrean = () => {
    setIsSmallSearch((prev) => !prev);
    dispatch(newsActions.setSmallSearchMode(false));
  };
  const handleViewResults = () => {
    dispatch(newsActions.setPageNumber(1));

    dispatch(getApi(false));
    setIsSmallSearch((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <SmallSearch
        isSearch={isSmallSearchClicked}
        onViewResults={handleViewResults}
        onBackClick={handleSmallScrean}
      ></SmallSearch>
      <HeaderStyle>
        <LogoContainer>
          <SmallLogo />
        </LogoContainer>
        <SearchContainer>
          <SearchElement />
        </SearchContainer>
        <DropdownContainer isDisable={false} isSmall={false}>
          <IconsContainer>
            <SmallSearchIcon
              onClick={handleSmallScrean}
              src={Search}
              alt="serch elememt"
            />
            {/* <img src={Settings} alt="serch elememt"></img>
            <img src={Notifications} alt="serch elememt"></img> */}
            <UserStyle onClick={toggling}>
              {user &&
                String(user.name).charAt(0).toUpperCase() +
                  "" +
                  String(user.family_name).charAt(0).toUpperCase()}
              {isLogoutOpen && (
                <DropdownListContainer isDisable={false} isSmall={false}>
                  <DropdownListLogout>
                    <DropdownItem
                      onClick={() =>
                        logout({
                          returnTo: window.location.origin,
                        })
                      }
                    >
                      Logout
                    </DropdownItem>
                  </DropdownListLogout>
                </DropdownListContainer>
              )}
            </UserStyle>
          </IconsContainer>
        </DropdownContainer>
      </HeaderStyle>
    </>
  );
};
export default HeaderElement;
