
import React from "react";
import { SearchIconStyled , Button, IconWrapper } from "./SearchIcon.styles"
import { SearchIcon } from '@heroicons/react/solid'


const SearchIconC = () => {
    return(
    <SearchIconStyled>

                <Button>
                    <IconWrapper>
                        <SearchIcon className="h-5 w-5 text-blue-500"/>
                    </IconWrapper>
                </Button>

    </SearchIconStyled>
    )
}

export default SearchIconC;