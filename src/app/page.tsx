import Link from "next/link";


export default function Home(){
    return (
        <div>
            <h1>Hi this is self learnt.</h1>
            <div>i am going to learn most of my time </div>
            <p>okay click here to navigate to some other pages....</p>
            <Link href={"/products"}>Products</Link>
            <br/>
            <Link href={"/register"}>Register</Link>
        </div>
    )
}