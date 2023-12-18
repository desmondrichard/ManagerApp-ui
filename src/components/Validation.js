
export default function Validation(values) {
    const errors = {};
    const username_pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    if (values.username === "") {
        errors.username = "*Required";
    }
    else if (!username_pattern.test(values.username)) {
        errors.username = "Username not matched";
    }

    if (values.password === "") {
        errors.password = "*Required";
    }
    else if (!password_pattern.test(values.password)) {
        errors.password = "Password must contain at least one number, one uppercase letter, one lowercase letter, and a special character.";
    }
    return errors;
}