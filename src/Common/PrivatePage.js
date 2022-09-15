function renderError() {
    localStorage.clear("lightson");
    return <h1>VOCÊ NÃO É AUTORIZADO</h1>;
}

export default function PrivatePage({ children }) {

    const auth = JSON.parse(localStorage.getItem("lightson"));

    if (!auth) {
        return renderError();
    }

    return (
        <>
            {children}
        </>
    );
    
}