import { memo } from "react";

const Input = memo((props) => {
    return (
        <>
            <input
                className={`${props.check ? 'valid' : 'invalid'}`}
                type={props.type}
                value={props.value}
                onChange={props.rendered}
                placeholder=""
            />
            <br />
        </>
    );
});

export default Input;
