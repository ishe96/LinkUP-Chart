import React, { useEffect, useContext, useState } from "react";

import { Context } from "../context";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ChatEngine = dynamic(() =>
    import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
    import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Home() {
    const { username, secret } = useContext(Context);
    const [showChat, setShowChat] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (typeof document !== undefined) {
            setShowChat(true);
        }
    }, []);

    useEffect(() => {
        if (username === "" || secret === "") {
            router.push("/");
        }
    }, [username, secret]);

    if (!showChat) return <div />;

    return (
        <div className="background">
            <div className="shadow">
                <ChatEngine
                    height="calc(100vh - 150px)"
                    width="calc(100vw - 50px)"
                    projectID="4779c9eb-0af3-4d06-b1f4-e045ca5fd12f"
                    userName={username}
                    userSecret={secret}
                    renderNewMessageForm={() => <MessageFormSocial />}
                />
            </div>
        </div>
    );
}
