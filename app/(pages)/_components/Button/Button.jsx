import styles from "./Button.module.scss";
import Link from 'next/link'
import React from 'react';

/**
 * color: either "light", "dark", or "gradient", defaults to light
 * route: page route to link to, such as /about
 * width: optional prop specifying the button width in pixels, defaults to 272
 */
/**
 * example usage: <Button route="/about" color="dark" width={100}>
 *                    Button Text Here
                  </Button>
 *  */ 
export default function Button({children, color="light", route, width=272}) {
    let colorClass;
    if (color==="light") {
        colorClass=styles.lightButton;
    }
    else if (color==="dark") {
        colorClass=styles.darkButton;
    }
    else {
        colorClass=styles.gradientButton;
    }
    return (
        <div>
                <Link href={route}>
                    <button className={`${styles.Button} ${colorClass}`} style={{width: `${width}px`}}>
                        {children}
                    </button>
                </Link>
        </div>
    );
}

