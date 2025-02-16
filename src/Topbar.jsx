import { useState } from "react"
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

function Topbar(){
    return (
        <div className="flex gap-4">
            <Dropdown />
            <SearchBar />
            <Profile />
        </div>
    )
}

export default Topbar

