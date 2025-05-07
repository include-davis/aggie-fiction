import styles from "./Button.module.scss";
import Link from 'next/link'
import React from 'react';
export default function Button(props) {
    //Replace props.route with the path of the button
    //Replace props.color,props.width,and props.text with the color,width and text of the button respectively
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
              <button className={`${styles.Button} ${colorClass}`} style={{width:props.width}}>{props.text}</button>
          </Link>
</div>
    );
}

