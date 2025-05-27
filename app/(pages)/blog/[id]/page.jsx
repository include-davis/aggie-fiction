"use client"
import styles from "./page.module.scss"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from "../../_components/Button/Button"
import { usePathname } from 'next/navigation'

export default function Page() {
    const pathname = usePathname()
    const pathSegments = pathname.split('/')
    const currentId = parseInt(pathSegments[pathSegments.length - 1], 10)
    const nextId = currentId + 1;
    const prevId = currentId - 1;
    const isFirstArticle = currentId === 1;
    const lastArticleId = 5 //hardcoded for now

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
                    src="/blog image.jpg"
                    alt="image"
                    style={{ objectFit: "cover", 
                            objectPosition: "50% 90%" }}
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
                        Dialogue tags are probably the easiest way to spot an amateur writer.<br></br>
                        <br></br>
                        Too often they don’t trust in the simple beauty of, “he said,” and opine, scream, hiss, whine
                        and ejaculate all over the place in the hopes of sprucing up their dialogue, when all it
                        actually does is take your reader out of the story.<br></br>
                        <br></br>
                        Don’t overuse unique dialogue tags. When all your dialogue tags are special, none of them are.
                        Trust in the invisibility of the word “said,” and make it your most used dialogue tag.<br></br>
                        <br></br>
                        Grammar wise, these are the most common ways dialogue is phrased with the correct
                        punctuation.<br></br>
                        <br></br>
                        “I am talking,” he said.<br></br>
                        <br></br>
                        He said, “I am talking.”<br></br>
                        <br></br>
                        “My conversation is being interrupted by an action,” he said, doing an action to add a dramatic
                        effect to the next sentence. “Make sure that period is there when I start talking
                        again.”<br></br>
                        <br></br>
                        “Also consider that if I don’t finish that sentence,” he said, “it becomes a comma.”<br></br>
                        <br></br>
                        If you’re just using these and writing decent dialogue, you’ve already got a good foundation.
                        But as with anything in writing, the easiest way to take it to the next level is to look at
                        authors you admire and study how they do it.<br></br>
                        <br></br>
                        Just remember to keep grammer in mind. Speaking of which…<br></br>
                        <br></br>
                        4.Grammar
                        <br></br>
                        <br></br>
                        Good grammar can make any subpar story significantly more readable. Here are some common grammar
                        mistakes that don’t really need to be expanded on, but are still very important in making your
                        work look professional.<br></br>
                        <br></br>
                        In no particular order: Don’t switch between past and present tense, there’s a difference
                        between they’re, there, and their. If you’re writing on anything that verges on fantasy, keep
                        your fictional names consistently spelled and capitalized. He can’t be Forswag and then forswang
                        in the next chapter. Don’t use passive voice, if you can add by zombies at the end of it, you’ve
                        got passive voice. (She was pushed BY ZOMBIES vs she fell.) and above all, don’t do what I did
                        and make one big run-on sentence. And if you’re planning on submitting your work to professional
                        places, use the standard format. double spaced lines in a twelve point standard font. There’s no
                        line space between paragraphs and indent.<br></br>
                        <br></br>
                        Got all that? No you didn’t, grammar is forever a work in progress. We’ll both get there
                        eventually.<br></br>
                        <br></br>
                        5.Not starting and stopping a story in the right place.
                        <br></br>
                        <br></br>
                        In Medias Res describes starting a story in the middle of the narrative and avoiding potential
                        waste and story fluff. The Hobbit didn’t start with Bilbo Baggins being born, growing up, eating
                        a big hearty second breakfast before going outside for a smoke. No it started when Gandalf
                        volunteered his house as a dwarf air bnb.<br></br>
                        <br></br>
                        A common beginner’s mistake is to start the story when the character is getting up and getting
                        ready for the day because they want us to get to know the character, but someone brushing their
                        teeth isn’t the most interesting way to learn about a story, and it often tells us nothing at
                        all about the plot. There’s nothing inherently wrong with starting a story with a morning
                        routine. The Hunger Games starts with Katniss Everdeen waking up in bed. But she starts by
                        waking up and reaching for someone who isn’t there, who she’s going to spend the rest of the
                        series trying in vain to save. If you know, you know. Katniss waking up adds to the story, while
                        most bedroom waking scenes don’t. Figure out what scenes are relevant and whether you can get to
                        the payoffs sooner by changing what you want to show in your writing.<br></br>
                        <br></br>
                        6. Failing to keep consistent tension/stakes throughout the piece.
                        <br></br>
                        <br></br>
                        It’s not just you. It's a problem so common people have taken to calling it saggy middle
                        syndrome, and there’s more than one way to cure it. Some try to solve this with detailed
                        outlines, fixing their pacing, or consistent payoffs to smaller plot points on the way to the
                        finale. However it happens, just make sure that all scenes have something truly important
                        happening, or some kind of resolution. If not, consider axing them or rewriting them.<br></br>
                        <br></br>
                        Your story can’t just all be build up for that really cool finale you have in your head. The art
                        of tension in a story is significantly dependent on genre and stakes. A story about a child’s
                        trip to school is likely going to be less tense than the next superhero film, but that doesn’t
                        mean there shouldn’t be a little bit of it in every scene. Now that doesn’t mean every scene
                        needs to be high stakes, everyone get your head on straight, we have to get this right or we’ll
                        die, because scene fatigue is also a real thing. Make your writing purposeful.<br></br>
                        <br></br>
                        7. Cliches
                        <br></br>
                        <br></br>
                        Things are cliche for a reason, but humans are natural pattern seekers. If we’ve seen it before,
                        we’ll glaze right over it. That’s not what you want your readers to feel when your character’s
                        dad dies and life will never be the same again. She’s looking into a black abyss and she’ll
                        never be able to get out of it. Odds are, you read that and felt nothing.<br></br>
                        <br></br>
                        Vice versa, if it’s something new, it will stand out and remain in the reader's head more.
                        Cliches exist for a reason, but they’re also a crutch keeping you from expressing yourself in a
                        way only you can. Try to avoid them when you’re writing key moments in your story. You don’t
                        want your strongest parts of the story to sound like everyone else’s. You’ll get better at
                        recognizing cliches the more you read, but an easy shortcut is if it’s the first thing you think
                        of, it’s probably a cliche.
                        <br></br>
                        <br></br>
                        8.Word choice.
                        <br></br>
                        <br></br>
                        Tell me if this sounds familiar. “The brunette looked into his cerulean orbs.” If you got
                        flashbacks, I know what you are. I love a good fancy word just as much as the next person but
                        ask yourself, why make your readers reach for the thesaurus when you can just say eyes? If you
                        feel like your prose is boring, replacing the words you have with smarter sounding equivalents
                        isn’t going to improve it, it’s just going to make it sound unnatural. Instead, try to play with
                        sentence lengths and subtext, cut down on unnecessary words, or get a beta reader in there to
                        help you figure out the real problem. Trust me, it’s not because you used “drunk” instead of
                        “crapulous.”<br></br>
                        <br></br>
                        9.Don’t get discouraged
                        <br></br>
                        <br></br>
                        Odds are, you’re going to make all these mistakes and more when you first put your words down on
                        the paper. That's what the first draft is there for. As long as your first draft exists, it’s
                        already perfect. You can’t edit out any of these mistakes if there’s nothing to edit. Just get
                        your words on the page and avoid editing as you write, it’ll only slow you down and it won’t be
                        as effective as purely writing or purely editing. Don’t let perfectionism or naysayers get in
                        the way. Just put your head down, get a nice cup of whatever beverage you like and get to work.
                        And that leads us to our final point.<br></br>
                        <br></br>
                        10.Not starting
                        <br></br>
                        <br></br>
                        A good chunk of you are reading this because you’re putting off actually writing but you still
                        want to feel productive. I’ve been guilty of doing that one too many times. Your story isn’t
                        going to write itself. You’re armed with all this shiny new knowledge now. Now stop reading and
                        go write.<br></br>
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
                    height: "4px",
                    backgroundColor: "var(--Aggie-Space)",
                    marginTop: "36px",
                    marginBottom: "30px"
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
                            style={{ objectFit: "cover" }}
                            fill
                        />
                    </div>
                    <div className={styles.AuthorInfor}>
                        <h2>Audrey Zhang</h2>
                        <p>She’s an English and Economics Major who’s not quite sure what’s going to happen when she
                            graduates, but hopefully it involves talking about Batman.</p>
                    </div>
                </div>
            </div>

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


                {currentId == lastArticleId ? (
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
