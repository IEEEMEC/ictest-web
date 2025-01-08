import "./registrationFees.css";
import Navbar from "../navbar/navbar.jsx";

export default function RegistrationFees() {
    const rate = [
        { name: "Faculty, IEEE Member:", rate: "INR 6500" },
        { name: "Faculty, Non-IEEE:", rate: "INR 8000" },
        { name: "Research Scholar/Student, IEEE members:", rate: "INR 6500" },
        { name: "Research Scholar/Student, Non-IEEE member:", rate: "INR 8000" },
        { name: "Industry Professional, IEEE member:", rate: "INR 8000" },
        { name: "Industry Professional, Non-IEEE member:", rate: "INR 10000" },
        { name: "Foreign delegate, Professional, IEEE member:", rate: "255 USD" },
        { name: "Foreign delegate, Professional, Non-IEEE member:", rate: "300 USD" },
        { name: "Foreign delegate, Student IEEE member:", rate: "125 USD" },
        { name: "Foreign delegate, Non-Student IEEE member:", rate: "150 USD" },
        { name: "Listener (Inside India):", rate: "INR 500" },
        { name: "Listener (Outside India):", rate: "15 USD" },
    ];

  // Split the rates into two columns
  const leftColumn = rate.slice(0, 6);
  const rightColumn = rate.slice(6, 12);

  return (
    <> 
      <Navbar />
      <div className="registration-fees-bg">
        <h1>Registration Fees</h1>
        <div className="register">
          <div className="column">
            {leftColumn.map((each, index) => (
              <div className="fees-box" key={index}>
                <h2>{each.name}</h2>
                <p>{each.rate}</p>
              </div>
            ))}
          </div>
          <div className="column">
            {rightColumn.map((each, index) => (
              <div className="fees-box" key={index}>
                <h2>{each.name}</h2>
                <p>{each.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
