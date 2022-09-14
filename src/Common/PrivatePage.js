function renderError() {
    localStorage.clear("lights-on");
    return <h1>VOCÊ NÃO É AUTORIZADO</h1>;
}

export default function PrivatePage({ children }) {

    const auth = JSON.parse(localStorage.getItem("lights-on"));

    if (!auth) {
        return renderError();
    }

    return (
        <>
            {children}
        </>
    );
    
}