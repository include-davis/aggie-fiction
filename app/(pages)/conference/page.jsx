import styles from "./page.module.scss";
import Image from "next/image";

const titleImagePath = "/conferencePageImages/titleImage.png";
const summaryImagePath = "/conferencePageImages/summaryImage.png";
const involvementImagePath = "/conferencePageImages/involvementImage.png";

export default function Conference() 
{
    return (
        <main className = {styles.page}>
            <div className = {styles.upperPage}>
                <div className = {styles.titleBlock}>
                    <div className = {styles.titleLeftBlock}>
                        <h1>San Francisco Writers Conference</h1>
                        <h2>A Gateway to the Literary World</h2>
                    </div>
                    <div className = {styles.titleImageContainer}>
                        <Image
                            src = {titleImagePath}
                            alt = {"Title Image"}
                            fill
                            sizes = "49%"
                            className = {styles.conferenceImage}
                        />
                    </div>
                </div>
                <div className = {styles.summaryBlock}>
                    <div className = {styles.summaryImageContainer}>
                        <Image
                            src = {summaryImagePath}
                            alt = {"Summary Image"}
                            fill
                            sizes = "34%"
                            className = {styles.conferenceImage}
                        />
                    </div>
                    <div className = {styles.summaryRightBlock}>
                        <p>The San Francisco Writers Conference (SFWC) is an annual four-day event that brings together writers, editors, literary agents, publishers, and industry professionals from around the globe. Held at the iconic Hyatt Regency, the conference offers a packed schedule of workshops, panels, and networking opportunities. Whether you're an aspiring novelist, a seasoned writer, or simply curious about the publishing world, SFWC provides a rare chance to gain industry insights, hone your craft, and make meaningful connections.</p>
                        <p>The event features sessions on everything from world-building and character development to query letters, marketing strategies, and self-publishing tips. It’s not just about learning the business side of writing—it’s also a celebration of creativity, where authors share their journeys and inspire others to pursue their literary dreams.</p>
                    </div>
                </div>
            </div>

            <h1>CAROUSEL GOES HERE</h1>

            <div className = {styles.lowerPage}>
                <div className = {styles.lowerLeftBlock}>
                    <div className = {styles.involvementBlock}>
                        <h1>Aggie Fiction's Involvement</h1>
                        <p>Every year, our club volunteers at the conference, helping with event coordination, guest services, and logistical support. This hands-on role gives us behind-the-scenes access to the event while allowing us to <b>engage directly with industry professionals.</b> It’s an incredible way to <b>build connections</b> and <b>gain insights</b> that go beyond the typical attendee experience.</p>
                        <p>For our club members, SFWC isn’t just a conference—<b>it’s an opportunity to represent UC Davis</b>, network with literary professionals, and bring back insights and experiences that strengthen our creative writing community.</p>
                    </div>
                    <div className = {styles.involvementBlock}>
                        <h2>Student Ambassador</h2>
                        <p>Aggie Fiction proudly serves as a student ambassador for SFWC. The conference hosts a Student Forum, a space dedicated to young and emerging writers, and we’ve taken the initiative to invite and connect with students from other universities. By expanding the forum’s reach, we help foster a larger community of student creatives and encourage more young writers to participate in this invaluable industry event.</p>
                    </div>
                </div>
                <div className = {styles.involvementImageContainer}>
                    <Image
                        src = {involvementImagePath}
                        alt = {"Involvement Image"}
                        fill
                        sizes = "43%"
                        className = {styles.conferenceImage}
                    />
                </div>
            </div>
        </main>
    );
}