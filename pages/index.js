import React, { useContext } from "react";
import { Context } from "../context";

import { useRouter } from "next/router";

import axios from "axios";

// const Auth = () => {
//     const { username, setUsername, secret, setSecret } =
//         useContext(Context);

//     const router = useRouter();

//     function onSubmit(e) {
//         e.preventDefault();

//         if (username.length === 1 || secret.length === 1) return;

//         axios
//             .put(
//                 "https://api.chatengine.io/users/",
//                 { username, secret },
//                 {
//                     headers: {
//                         "PRIVATE-KEY": "96a3ff30-2da8-4dda-93e6-3ddcd42cfccf",
//                     },
//                 }
//             )

//             .then((r) => {
//                 router.push("/chats");
//             });
//     }

const Auth = () => {
    const { username, setUsername, secret, setSecret } = useContext(Context);

    const router = useRouter();

    function onSubmit(e) {
        e.preventDefault();

        if (username.length === 1 || secret.length === 1) return;

        axios
            .put(
                'https://api.chatengine.io/users/',
                { username, secret },
                {
                    headers: {
                        "Private-Key": "b24b81fe-d62a-4c72-a39f-efd97cacf288",
                    },
                }
            )
            .then((r) => {
                router.push("/chats");
            });
    }

    return (
        <div className="background">
            <div className="auth-container">
                <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
                    <div className="auth-title">Royal Space</div>

                    <div className="input-container">
                        <input
                            placeholder="Email"
                            className="text-input"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="input-container">
                        <input
                            type="password"
                            placeholder="password"
                            className="text-input"
                            onChange={(e) => setSecret(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        Login / Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Auth;
