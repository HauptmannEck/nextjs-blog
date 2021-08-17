import Head from "next/head";
import Layout from "../../components/layout";
import React from "react";

const FirstPost: React.FC = () => {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
        </Layout>
    );
};

export default FirstPost;
