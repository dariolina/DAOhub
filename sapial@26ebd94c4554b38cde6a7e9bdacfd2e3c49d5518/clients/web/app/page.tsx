"use client";

import { useEffect, useRef } from "react";
import { useChat } from "ai/react";

import UserIcon from "./components/icons/UserIcon";
import OpenAiIcon from "./components/icons/OpenAiIcon";
import PaperAirplaneIcon from "./components/icons/PaperAirplaneIcon";

export default function Chat() {
  const messageRef = useRef<HTMLDivElement>(null);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  useEffect(() => {
    const defaultValue = "What problem or need does this DAO proposal address?";
    const event = {
      target: { value: defaultValue },
    } as React.ChangeEvent<HTMLInputElement>;
    handleInputChange(event);
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [messages]);
  const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;

  return (
    <div className="justify-center container  mx-auto">
      <div className="flex flex-col w-full gap-10 " ref={messageRef}>
      <div className="flex-grow flex flex-col gap-3 mb-10">
          {lastMessage && (
            <div
              key={lastMessage.id}
              className={`whitespace-pre-wrap flex gap-2 p-4 ${
                lastMessage.role === "user" ? "text-white" : "text-white"
              }`}
            >
              <div className="min-w-6">
                {lastMessage.role === "user" ? <UserIcon /> : <OpenAiIcon />}
              </div>
              {lastMessage.content}
            </div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="fixed bottom-0 w-full max-w-md 2xl:max-w-[82rem] mx-auto container"
        >
          <div className="w-full max-w-xl mx-auto">
            <div className="relative">
              <input
                className="block bottom-0 w-full text-sm text-gray-900 pr-10 max-w-xl p-4 mb-8 border border-gray-300 rounded shadow-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={input}
                placeholder="Ask a question"
                onChange={handleInputChange}
              />
              <div className="absolute text-gray-400 inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <PaperAirplaneIcon />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
