import { getToken } from "next-auth/jwt";
import { getSession, useSession } from "next-auth/react";

export default function WhoAmI(props) {
  const { data } = props;

  return (
    <div>
      { data?.name ? 
        <h1> { "Bem vindo! \n " + data.name } </h1>
        : <h1> não Autenticando </h1>
      }
    </div>
  );
}

export async function getServerSideProps({ req }) {
  try {
    const session = await getSession({ req });
    const token = await getToken({ req });

    console.log("[whoiam] [getserversideprops] minha session:");
    console.log(session);

    console.log("[whoiam] [getserversideprops] meu token:");
    console.log(token.name);

    return {
      props: {
        data: {
          name: token.name
        },
      },
    };
  } catch (error) {
    console.log("Token Inválido!");
    return {
      props: {
        data: {},
      },
    };
  }
}
