import Link from "next/link";

const Navigation = () => {
    return (
        <>
            <h1>Navigation</h1>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
            </ul>
        </>
    )
}

export default Navigation