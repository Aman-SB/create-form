import React, { useCallback, useState } from "react";
import Input from "./Input";

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

    const checkEmail = useCallback(
        (e) => {
            // Extract the entered email from the event
            const enteredEmail = e.target.value;

            // Update the email state with the entered value
            setEmail(enteredEmail);

            // Use a regular expression to perform basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Update the isValidEmail state based on the result of the validation
            setIsValidEmail(emailRegex.test(enteredEmail));
        },
        []
    );

    const checkPassword = useCallback(
        (e) => {
            const enteredPassword = e.target.value;
            setPassword(enteredPassword);

            setIsValidPassword(enteredPassword.length >= 8 ? true : false);
        },
        []
    );

    const checkConfirmPassword = useCallback(
        (e) => {
            const enteredConfirmPassword = e.target.value;
            setConfirmPassword(enteredConfirmPassword);

            // Compare with the entered password
            setIsValidConfirmPassword(enteredConfirmPassword === password);
        },
        [password]
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if email is valid before submitting the form
        if (!isValidEmail) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!isValidPassword) {
            alert("Password must be atleast 8 character.");
            return;
        }

        if (!isValidConfirmPassword) {
            alert("Please enter a valid Password.");
            return;
        }

        alert("Form have been Submited");
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="email">
                    {" "}
                    Email :
                    <br />
                    <Input type="email" rendered={checkEmail} value={email} check={isValidEmail}/>
                </label>
                {isValidEmail ? (
                    " "
                ) : (
                    <div className="error">Invalid Email Format</div>
                )}
                <br />

                <label htmlFor="password">
                    {" "}
                    Password :
                    <br />
                    <Input
                        type="password"
                        rendered={checkPassword}
                        value={password}
                        check={isValidPassword}
                    />
                </label>
                {isValidPassword ? (
                    " "
                ) : (
                    <div className="error">
                        Password must be atleast 8 character
                    </div>
                )}
                <br />

                <label htmlFor="confirm-password">
                    {" "}
                    Confirm Password :
                    <br />
                    <Input
                        type="password"
                        rendered={checkConfirmPassword}
                        value={confirmPassword}
                        check={isValidConfirmPassword}
                    />
                </label>
                {isValidConfirmPassword ? (
                    " "
                ) : (
                    <div className="error">Password do not match</div>
                )}
                <br />

                <div className="btn-continaer">
                    <button
                        type="submit"
                        className="btn"
                        onSubmit={handleSubmit}
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
