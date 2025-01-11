import {React, useContext  }from "react";
import { AuthContext } from "./auth";


export default function Logout(){

const { logout } = useContext(AuthContext);
    return(
        <div>
            <button onClick={logout}>log out</button>
        </div>

    )

}