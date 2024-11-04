import NewPrompt from '../../components/newPrompt/NewPrompt';
import './chatPage.css';
import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import Markdown from "react-markdown";
import { IKImage } from "imagekitio-react";

const ChatPage = () => {
    const path = useLocation().pathname;
    const chatId = path.split("/").pop();

    const { isLoading, error, data } = useQuery({
        queryKey: ['chat', chatId],
        queryFn: () =>
            fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
                credentials: "include",
            }).then((res) => res.json()),
    });

    // Inspect the fetched data structure
    console.log("Fetched data:", data);

    return (
        <div className='chatPage'>
            <div className="wrapper">
                <div className="chat">
                    


                    {isLoading ? "Loading..." :
                        error ? (
                            <>Something went wrong! {console.log(error)}</>
                        ) : (
                                data?.history?.map((message, i) => (
                                    <>
                                    {message.img && (
                                        <IKImage 
                                        urlEndpoint = {import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                                        path ={message.img}
                                        height = "300"
                                        width = "400"
                                        transformation = {[{height:300,width:400 }]}
                                        loading="lazy"
                                        lgip={{active:true, quality:20}}
                                        />
                                    )}
                                    <div className={message.role === "user" ? "message user" : "message"} key={i}>
                                    <Markdown>
                                        {message?.parts?.[0]?.text || "No content available"}
                                    </Markdown>
                                </div>
                                </>
                            ))
                        )}

                    {data && <NewPrompt data ={data} />}
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
