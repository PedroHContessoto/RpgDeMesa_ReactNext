
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { createContext } from "react";


const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
};

export default function SideBar(props) {
    const [message, setMessage] = useState("");
    const router = useRouter();
    const MessageCallback = (props) => {
        setMessage(props.info);
        const toastLiveExample = document.getElementById("liveToast");
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
    };

    const MessageContext = createContext('')

    return (
        <>
            <div className="d-flex flex-nowrap">

                {RenderMenu(menuAdmin)}
                <main className="full">
                    <MessageContext.Provider value={MessageCallback}>
                        <AnimatePresence
                            mode='wait'
                            initial={false}
                        >
                            <motion.div
                                key={router.route}
                                initial="hidden"
                                animate="enter"
                                exit="exit"
                                variants={variants}
                                transition={{ type: "linear" }}
                                className="overflow-auto"
                            >
                                {props.children}
                            </motion.div>
                        </AnimatePresence>
                        <RenderMessage info={message} />
                    </MessageContext.Provider>
                </main>
            </div>
        </>
    );
}
