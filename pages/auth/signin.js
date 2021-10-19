import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'

function signIn({ providers }) {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
                <img src="https://links.papareact.com/ocw" alt="" className="w-80" />
                <p className="font-xs italic">
                    This is not a real app but it could be!!
                </p>
                <div className="mt-14">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })} className="p-3 bg-blue-500 rounded-lg text-white">
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

// Server Side Rendering

export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}

export default signIn
