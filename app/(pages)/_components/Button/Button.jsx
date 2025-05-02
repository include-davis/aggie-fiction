import styles from "./Button.module.scss";
import Link from 'next/link'
import React from 'react';
export default function Button(props) {
    let colorClass;
    if (props.color==="light"){
        colorClass=styles.lightButton
    }
    else if (props.color==="dark"){
        colorClass=styles.darkButton
    }
    else{
        colorClass=styles.gradientButton
    }
    return (

      <div>
          <Link href={props.route}>
              <button className={`${styles.Button} ${colorClass}`}>{props.text}</button>
          </Link>
</div>
    );
}

