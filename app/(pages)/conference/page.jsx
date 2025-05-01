import styles from "./page.module.scss";

export default function Conference() 
{
    return (
        <main className = {styles.page}>
            <div className = {styles.titleBlock}>
                <div className = {styles.titleLeftBlock}>
                    <h1>San Francisco Writers Conference</h1>
                    <h2>A Gateway to the Literary World</h2>
                </div>
                <div>
                    <p>Image will go here</p>
                </div>
            </div>
        </main>
    );
}