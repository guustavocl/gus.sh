import axios from "axios";
import { useRef, useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import { ImSpinner2 } from "react-icons/im";
import Card from "../Card";

// THIS IS A COPY FROM CONRAD PERSONAL WEBSITE, SORRY I WAS IN HURRY, CHECK CNRAD GITHUB https://github.com/cnrad
const Form = () => {
  const email = useRef<string>("");
  const message = useRef<string>("");
  const [sending, setSending] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const sendMessage = async () => {
    if (email.current == "" || message.current == "") return setErrMsg("Please fill out all fields!");
    if (!emailRegex.test(email.current)) return setErrMsg("Hmm, that doesn't look like an email.");

    setSending(true);

    const response = await axios.post("/api/send", {
      email: email.current,
      message: message.current,
    });

    if (response.data.result === "FIELD_EMPTY") return setErrMsg("Please fill out all fields!");
    if (response.data.result === "DISCORD_API_ERROR") return setErrMsg("Something went wrong...");

    setSending(false);

    return setErrMsg("Thanks for reaching out!");
  };

  return (
    <Card className="group col-span-12 h-auto font-mono md:col-span-8">
      <div className="lights row-span-3 w-full rounded-md p-4 md:col-span-2">
        <h1 className="font-pink-200 mb-1 font-mono text-sm font-bold text-glow-violet-500">EMAIL</h1>
        <input
          placeholder="example@gmail.com"
          type="text"
          onChange={(e: any) => (email.current = e.target.value)}
          className="mb-4 w-full rounded-md  border-violet-300/50 bg-slate-200/5 p-2 text-sm placeholder:text-violet-300/70 focus:border-pink-100 focus:ring-pink-100"
        />

        <h1 className="font-pink-200 mb-1 text-sm font-bold text-glow-violet-500">MESSAGE</h1>
        <textarea
          placeholder="Hi Gustavo, what's up?"
          onChange={(e: any) => (message.current = e.target.value)}
          className="mb-4 h-36 w-full rounded-md border-violet-300/50 bg-slate-200/5 p-2 text-sm placeholder:text-violet-200/70 focus:border-pink-100 focus:ring-pink-100"
        />

        <div className="flex w-full flex-row items-center justify-between">
          <p className="font-pink-200 text-sm text-glow-violet-500">{errMsg}</p>

          <button
            onClick={sendMessage}
            className="font-pink-200 flex flex-row items-center justify-center rounded-md border border-violet-800/10 bg-violet-800/30 px-5 py-2 transition-colors duration-75 text-glow-violet-500 hover:bg-gray-200 hover:bg-violet-500/30"
          >
            <span className="font-pink-200 mt-[2px] text-sm font-bold tracking-wider text-glow-violet-500">SEND</span>
            {!sending && <RiSendPlane2Fill className="ml-2" />}
            {sending && <ImSpinner2 className="ml-2 h-4 w-4 animate-spin" />}
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Form;
