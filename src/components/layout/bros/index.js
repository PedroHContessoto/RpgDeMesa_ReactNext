import Link from "next/link";
import Image from 'next/image'
import { useEffect, useState } from "react";
import { MessageContext } from "@/contexts/message";
import menuBros from "@/components/menus/bros";
import { motion,AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -200 },
};

export default function PageLayout(props) {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const MessageCallback = (props) => {
    setMessage(props.info);
    const toastLiveExample = document.getElementById("liveToast");
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  };

  return (
    <>
      <div className="d-flex flex-nowrap">

        {RenderMenu(menuBros)}
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

const RenderMessage = (props) => {
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        id="liveToast"
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto">{props.info.title}</strong>
          <small>{props.info.time}</small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">{props.info.message}</div>
      </div>
    </div>
  );
};

const RenderList = (object) => {
  const class_button =
    "btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed";
  return (
    <li className="mb-1" key={object.name}>
      <button
        className={class_button}
        data-bs-toggle="collapse"
        data-bs-target={`#${object.name}-collapse`}
        aria-expanded="false"
      >
        {object.name}
      </button>
      <div className="collapse" id={`${object.name}-collapse`}>
        <ul
          className="btn-toggle-nav list-unstyled fw-normal pb-1 small"
          key={object.name}
        >
          {object.links.map((menu) => (
            <li key={menu.name}>
              <Link href={menu.url}>
                <a
                  href="src/components/layout/analista#"
                  className="link-dark d-inline-flex text-decoration-none rounded btn-pretty"
                >
                  { menu.name }
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const RenderMenu = (options) => {
  return (
    <div className="flex-shrink-1 p-3 bg-white mw280" key={options.name}>
      <RenderPII />
      {/* <span className="fs-5 fw-semibold">{options.name}</span> */}
      <hr></hr>
      <div className="nav nav-pills flex-column mb-auto" style={{ maxHeight: "55vh"}}>
        <ul className="list-unstyled ps-0 menu_scroll">
          {options.menus.map((opt) => RenderList(opt))}
        </ul>
      </div>
        {/* <DropdownProfile user={options.name} /> */}
    </div>
  );
};

const RenderPII = _ => {
  const session = useSession()
  const [photoURL, setPhotoUrl] = useState('')
  const [name, setName] = useState('')
  
  useEffect(_=> {
    if(session?.data?.user?.image){
      setPhotoUrl(session.data.user.image)
    }
    if(session?.data?.user?.name){
      const name = session.data.user.name.split(" ")
      const firstName = name[0]
      const lastName = name[name.length - 1]
      setName(firstName + " " + lastName)
    }
  }, [session])


  return (
    <div className="row text-center">
      <MyImage url={photoURL}/>
      {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
      <h2 className="fw-normal">{ name }</h2>
      <p>Analista APP Sec.</p>
      <p>
        <button className="btn btn-dark btn-sm" onClick={() => signOut({ callbackUrl: '/' })}>Encerrar Sessão </button>
      </p>
    </div>
  )
}


const MyImage = (props) =>{
  if(!props.url)
    return null

  return (
    <div  style={{ borderRadius: '50%' }}>
      <Image
        src={props.url}
        alt="Picture of the user"
        width={180}
        height={180}
        style={{ borderRadius: '50%' }}
      />
    </div>
  )
}