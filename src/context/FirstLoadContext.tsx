import { createContext, useContext, useEffect, useState } from "react";


interface IFirstLoadContext {
    alreadyLoaded: boolean;
    toggleAlreadyLoaded: () => void;
}

const FirstLoadContext = createContext<IFirstLoadContext | undefined>(undefined);

interface IFirstLoadProps {
    children: JSX.Element;
}

function FirstLoadProvider(props: IFirstLoadProps) {
    const {children} = props;
    const [alreadyLoaded, setAlreadyLoaded] = useState<boolean>(false);

    useEffect(() => {
        setAlreadyLoaded(true);

        return () => {setAlreadyLoaded(false)}
    }, [alreadyLoaded]);

    const contextValue: IFirstLoadContext = {
        alreadyLoaded: alreadyLoaded,
        toggleAlreadyLoaded: () => {setAlreadyLoaded(true)}
    }

    return (  
        <FirstLoadContext.Provider value={contextValue}>
            {children}
        </FirstLoadContext.Provider>
    );
}

const useFirstLoad = (): IFirstLoadContext => {
    const context = useContext(FirstLoadContext);

    if(context === undefined) {
        throw new Error("useFirstLoad must be used inside FirstLoadContext.Provider");
    }

    return context;
    
}

export {FirstLoadProvider, useFirstLoad};