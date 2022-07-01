import React from "react";
// import { Link } from "gatsby";
// import Logo from "../../images/logo.svg"
// import { useMenuQuery } from "../../hooks/useMenuQuery";
import { SearchStyle }  from "./SearchBox.styles"
import SearchIconC from "./SearchIcon/SearchIcon"
import SearchBoxText from "./SearchBoxText/SearchBoxText";

const SearchBox = () => {


    // const data = useMenuQuery();


    return (
        <SearchStyle>
            {/* asdasd */}
            <SearchIconC/>
            <SearchBoxText></SearchBoxText>

        </SearchStyle>
        // <p>x</p>
    )
}

export default SearchBox;