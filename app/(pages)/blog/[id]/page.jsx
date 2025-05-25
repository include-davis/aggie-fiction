"use client"
import styles from "./page.module.scss"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from "../../_components/Button/Button"
import { usePathname } from 'next/navigation'

export default function Page() {
    const pathname = usePathname()

    return (
        <div className={styles.page}>
            <div>Post: {pathname}</div>
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
                        src="/blog image.jpg"
                        alt="image"
                        style={{objectFit: "cover"}}
                        fill
                    />
                </div>

                <div className={styles.header}>
                    <h1>Ten Mistakes Amateur Writers Make</h1>
                </div>

                <div className={styles.subheader}>
                    <div className={styles.description}>Description:</div>
                    <p>Writing is intimidating. But it doesn’t have to be.</p>
                </div>

            <div className={styles.blogcontent}>
                <hr className={styles.lineseparator} />
                <div className={styles.content}>
                    <p>
                        You have a six hour movie playing in your mind, an open document with approximately zero to
                        a bajillion words and a little question niggling at the back of your mind.
                        Is any of this actually good?
                        <br></br>
                        <br></br>
                        Yes, and anyone who tells you otherwise doesn’t have your best interests at heart. Everyone has
                        a story worth telling, but the way it is told can be improved.
                        In my personal experience, these are some of the top mistakes I see writers make.
                        <br></br>
                        <br></br>
                        1. Not trusting your reader
                        <br></br>
                        <br></br>
                        Reading is a collaborative act. Say you write down the word “church.” Someone might think of
                        their hometown church and someone else might think of Notre Dame. It could be a brownstone or
                        have a garden or buttresses and it’s completely up to each reader, not you.
                        Everyone is going to imagine a different church.
                        <br></br>
                        <br></br>
                        Many writers want to make sure that readers see their vision of the story, and end up bogging
                        the story down with one too many details. It’s how we get sentences like, “She crossed her arms
                        and twiddled her thumbs as she sat down on the tilted red stool,” and just like that people’s
                        eyes have glazed over. You have over described your scene. Or worse, they don’t trust that the
                        reader can understand the character’s motivations and end up overexplaining it. Readers are
                        smarter than you think. It’s important to pick and choose what actually matters to include.
                        Embrace the nuance that comes from reading and focus on what really matters.
                        Think of it as you only have a certain number of moves you can use to win the game. You have to
                        make every move count. You have to make every word count.
                        <br></br>
                        <br></br>
                        Instead of using adverbs like “she moved quickly,” just say, “she ran.” Instead of describing
                        every action she takes to leave a setting, just say, “she left.” (Unless of course, there’s
                        something important to the story in the way she storms out the room) Your readers have a big
                        imagination, they can and will fill in the gaps, and cutting down on these will make a more
                        streamline story.
                        The same goes for subtext.
                        <br></br>
                        <br></br>
                        It is difficult to know what is important and what is not. As a general rule, if it’s an
                        important detail like someone’s prized amulet or an suspicious odor in the murder room, you’ll
                        want to mention at least twice in order for it to stick in the reader’s mind, but with things
                        like internal feelings, emotions and inner worlds, trust in your words and character actions to
                        show the way people feel instead of just saying she was angry. Tell settings, show emotions.
                        The story will be all the stronger for it if you leave things unsaid and trust your reader to
                        fill in the gaps.
                        <br></br>
                        <br></br>
                        2. Beta reading too early
                        <br></br>
                        <br></br>
                        Beta readers who can look at your work and give you feedback are incredibly important to
                        improving your work. No matter how good of a writer you are,
                        you’re going to want beta readers. But a lot of beginner writers send out their material too
                        early. There’s only so much a beta reader can do with an outline or a first draft. This early in
                        the process, there’s still so much that you already know you have to work on, so they’ll just
                        tell you what you already know.There’s just not enough there to effectively polish. Ideally, you
                        want your work to be the best you can possibly make it
                        on your own before you show it to other people, because that’s as good as it’s going to get
                        under just your own hands.
                        <br></br>
                        <br></br>
                        Aside from having enough material, the right feedback is also important. Readers are generally
                        better at noticing problems instead of fixing them, which makes sense. More people out there
                        read instead of write.
                        So when listening to criticism, pay attention to what problems they point out and trust in your
                        own skills to fix them
                        <br></br>
                        <br></br>
                        But this does not mean you shouldn’t share your work. You should, no matter what point you’re
                        at. Other people being excited about your art is the little spark you need to keep going.
                        Share to anyone who’s willing to read. Just don’t always expect useful criticism when that
                        happens.
                        <br></br>
                        <br></br>
                        3. Dialogue tags
                        <br></br>
                        <br></br>


                    </p>
                </div>

                <div className={styles.category}>
                    <p>Categories:</p>
                    <Button route="/writing tips" color="light">
                        Writing Tips
                    </Button>
                </div>
                <hr className={styles.lineseparatorbold} style={{
                    height:"4px",
                    backgroundColor:"var(--Aggie-Space)",
                    marginTop:"36px",
                    marginBottom:"30px"
                }

                }></hr>
            </div>

            <div className={styles.AboutAuthor}>
                    <h2>About the Author</h2>
                    <div className={styles.AuthorContent}>
                        <div className={styles.author_image}>
                            <Image
                                src="/Author_image.jpg"
                                alt="image of author"
                                style={{objectFit: "cover"}}
                                fill
                            />
                        </div>
                        <div className={styles.AuthorInfor}>
                            <h2>Author Name</h2>
                            <p>She’s an English and Economics Major who’s not quite sure what’s going to happen when she graduates, but hopefully it involves talking about Batman. </p>
                        </div>
                    </div>
                </div>

                <div className={styles.EndButtons}>
                    <div className={styles.button}>Next entry</div>
                    <Link href="#" className={styles.arrowLink}>
                        <Image
                            src="/bottom_arrow.svg"
                            width={44}
                            height={52}
                            alt="picture of the arrow"
                        />
                    </Link>
                </div>
        </div>
    )
}
