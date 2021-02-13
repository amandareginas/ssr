import React from 'react';
import Head from 'next/head';

function Index() {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
                <title>React back</title>
            </Head>
            <div className="container">
            <h1>Hello, José!</h1>
            <h3>Favor desabilitar o JavasScript</h3>
            </div>
        </div>
    )
}

export default Index;