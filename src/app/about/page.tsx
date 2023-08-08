import { Metadata } from "next"


export const metadata : Metadata = {
    title: 'About',
    description: 'About Page'
}




export default function Aboutpage() {
    return (
        <>
            <div>
                <h1>About Us</h1>
                <p>We are a social media platform that tries new ways</p>
            </div>
        </>
    )
}