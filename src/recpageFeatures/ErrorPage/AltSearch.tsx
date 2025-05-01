import * as React from "react";
import { Link } from "react-router-dom";

export default function AltSearch(this: any, {name}: {name: string}){
    const link: string = `/anime/${name}`

    return (
        <Link to={link} reloadDocument={true} style = {{fontWeight: '400', color: '#008080', textDecoration: 'none' }}>
            {name}
        </Link>
    )
}