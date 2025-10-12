/* eslint-disable react/prop-types */
import styles from "./BoardMembers.module.scss"
import Image from "next/image";
import React from "react";

export default function BoardMembers({ board }) {
    return (
        <div className={styles.board}>
          <h1>Our board</h1>
          <div className={styles.boardContent}>
            <div className={styles.boardGrid}>
              {board.map((member, i) => (
                <div className={styles.member} key={i}>
                  <div className={styles.memberImageContainer}>
                    <Image
                      src={member.imageUrl}
                      fill
                      alt={member.imageAlt}
                    />
                  </div>
                  <div className={styles.memberText}>
                    <h2>{member.name}</h2>
                    <p className={styles.position}>{member.role}</p>
                    <p>{member.majors.length > 1 ? "Majors: " + member.majors.join(" & ") : "Major: " + member.majors[0]}</p>
                    {member.minors.length > 0 && <p>{member.minors.length > 1 ? "Minors: " + member.minors.join(" & ") : "Minor: " + member.minors[0]}</p>}
                    <p>{member.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
}