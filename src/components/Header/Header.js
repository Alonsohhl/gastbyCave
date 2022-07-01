import React from "react";
import { Link } from "gatsby";
import Logo from "../../images/logo.svg"
import { useMenuQuery } from "../../hooks/useMenuQuery";
import { Wrapper , Content } from "./Header.styles"
// import SearchBox from "../Input/SearchInput";
// import SearchBox from "../SearchBox/SearchBox";
import SearchBox from "../SearchBox/SearchBox";

const Header = () => {

    const data = useMenuQuery();
    console.log("data");
    console.log(data);

    return (
        <Wrapper>
            <Content>
                {/* <Link to="/">
                    <img src={Logo} alt="" />
                    xd
                </Link> */}


                <SearchBox></SearchBox>

            </Content>
        </Wrapper>
    )
}

export default Header;