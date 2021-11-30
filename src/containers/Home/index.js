import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import HOME_QUERY from "../../queries/article/home";

const Home = () => {
    let { id } = useParams();
    return (
        <Query query={HOME_QUERY} slug={id}>
            {({ data: { page } }) => {

                return (
                    <div>

                        <div className="pages">

                            <div id="page-content" className="content" dangerouslySetInnerHTML={{
                                __html: page.content
                            }}></div>
                        </div>

                    </div>
                );
            }}
        </Query>
    );
};

export default Home;
