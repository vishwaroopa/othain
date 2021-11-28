import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import ARTICLE_QUERY from "../../queries/article/article";

const Article = () => {
  let { id } = useParams();
  return (
    <Query query={ARTICLE_QUERY} slug={id}>
      {({ data: { page } }) => {
        
        return (
          <div>
                       
                        <div className="page">
                           
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

export default Article;
