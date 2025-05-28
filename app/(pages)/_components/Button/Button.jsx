// "use client";
import styles from "./Button.module.scss";
import Link from 'next/link'
import React from 'react';

/**
 * color: either "light", "dark", or "gradient", defaults to light
 * route: page route to link to, such as /about. default is no route
 * onClick: onClick handler, you can pass any function in here. defaut is no function
 * extraStyles: styleclass to pass in in addition to default button styles. default is no extra styleclass
 */

/**
 * example usage: <Button route="/about" color="dark" extraStyles={styles.buttonExtraStyles}>
 *                    Button Text Here
                  </Button>
 *  */ 
export default function Button({children, onClick=null, color="light", route="", extraStyles=""}) {
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
                    <button 
                        onClick={onClick}
                        className={`${styles.Button} ${colorClass} ${extraStyles}`} 
                    >
                        {children}
                    </button>
                </Link>
        </div>
    );
}

