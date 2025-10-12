/* eslint-disable react/prop-types */
"use client"
import styles from "./BlogArticle.module.scss"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from "../../_components/Button/Button"

export default function BlogArticle({articles, authors, id}) {
    const articleIndex = articles.findIndex(art => art.id == id);
    const article = articles[articleIndex];
    const author = authors.find(aut => aut.name == article.author);

    const isFirstArticle = articleIndex === 0;
    const isLastArticle = articleIndex === articles.length - 1;
    const nextId = isLastArticle ? id : articles[articleIndex + 1].id;
    const prevId = isFirstArticle ? id : articles[articleIndex - 1].id;

    console.log(article);
    console.log(author);

    return (
        <div className={styles.page}>
            <div className={styles.TopButtons}>
                <Link href="/blog" className={styles.arrowButton}>
                    <Image
                        src="/top_arrow.svg"
                        width={44}
                        height={52}
                        alt="picture of the arrow"
                    />
                </Link>
                <div className={styles.button}>Main Blog Page</div>
            </div>

            <div className={styles.image}>
                <Image
                    src={article.imageUrl}
                    alt={article.imageAlt}
                    style={{ objectFit: "cover", 
                            objectPosition: "50% 90%" }}
                    fill
                />
            </div>

            <div className={styles.header}>
                <h1>{article.title}</h1>
            </div>

            <div className={styles.subheader}>
                <div className={styles.description}>Description:</div>
                <p>{article.description}</p>
            </div>

            <div className={styles.blogcontent}>
                <hr className={styles.lineseparator} />

                {/* Below is LONG_TEXT */}
                <div className={styles.content} 
                    dangerouslySetInnerHTML={{ __html: article.post_content }}
                />

                <div className={styles.category}>
                    <p>Categories:</p>
                    <Button route="/writing tips" color="light">
                        Writing Tips
                    </Button>
                </div>
                <hr className={styles.lineseparatorbold} style={{
                    height: "4px",
                    backgroundColor: "var(--Aggie-Space)",
                    marginTop: "36px",
                    marginBottom: "30px"
                }
                }></hr>
            </div>

            {author && <div className={styles.AboutAuthor}>
                <h2>About the Author</h2>
                <div className={styles.AuthorContent}>
                    <div className={styles.author_image}>
                        <Image
                            src={author.imageUrl}
                            alt={author.imageAlt}
                            style={{ objectFit: "cover" }}
                            fill
                        />
                    </div>
                    <div className={styles.AuthorInfor}>
                        <h2>{author.name}</h2>
                        <div
                            dangerouslySetInnerHTML={{ __html: author.description }}
                        />
                    </div>
                </div>
            </div>}

            <div className={styles.EndButtons}>
                {isFirstArticle ? (
                    <div className={styles.invisibleButton} />
                ) : (
                    <div className={styles.previousButton}>
                        <Link href={`/blog/${prevId}`} className={styles.arrowButton}>
                            <Image
                                src="/top_arrow.svg"
                                width={44}
                                height={52}
                                alt="picture of the arrow"
                            />
                        </Link>
                        <div className={styles.button}>Previous Entry</div>
                    </div>
                )}


                {isLastArticle ? (
                    <div className={styles.invisibleButton} />
                ) : (
                <div className={styles.nextButton}>
                    <div className={styles.button}>Next entry</div>
                    <Link href={`/blog/${nextId}`} className={styles.arrowLink}>
                        <Image
                            src="/bottom_arrow.svg"
                            width={44}
                            height={52}
                            alt="picture of the arrow"
                        />
                    </Link>
                </div>
                )}

            </div>


        </div>
    )
}
