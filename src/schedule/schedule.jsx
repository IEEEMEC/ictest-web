import "./schedule.css";
import Navbar from "../navbar/navbar.jsx";


export default function Schedule() {

    const events = [
        {
            name: "Conference Dates",
            date: "April 3, 4 and 5, 2025",
        },
        {
            name: "Conference Location",
            date: "Kochi 21, Kerala, India",
        },
        {
            name: "Call for Papers Announcement",
            date: "1st September, 2024",
        },
        {
            name: "Last date for draft paper submission",
            date: (
                <>
                    <p><s>Dec 15, 2024</s></p>
                    <p>Jan 15, 2025</p>
                </>
            )
        },
        {
            name: "Notification of Acceptance",
            date: (
                <>
                    <p><s>Dec 20, 2024</s></p>
                    <p>Jan 30, 2025</p>
                </>
            )
        },
        {
            name: "Final Camera-ready Paper",
            date: "Feb 10th, 2025",
        },
    ];
    const handleRedirect = () => {
        window.open('https://cmt3.research.microsoft.com/ICTEST2025', '_blank'); // Replace with your URL
    };

    return (
        <>
            <Navbar />
            <div className="schedule-bg">
                <h1>Schedule</h1>
                <div className="schedule">
                    {events.map((event) => (
                        <>
                            <div className="event" key={event.name}>
                                <h2>{event.name}</h2>
                                <p>{event.date}</p>
                            </div>
                            <hr />
                        </>
                    ))}
                </div>
                <button onClick={handleRedirect}>Register now</button>
                <div className="contact-info">
                    <h3>contact information</h3>
                    <span>email: ictest25@mec.ac.in</span><br></br>
                    <span>(M) +91 9447991108, +919447219957</span>
                </div>
            </div>
        </>
    );
}