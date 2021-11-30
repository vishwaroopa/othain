import React from "react";
import Query from "../Query";
import CATEGORIES_QUERY from "../../queries/category/categories";


const Nav = () => {
    return (
        <Query query={CATEGORIES_QUERY} id={null}>
            {({ data: { post } }) => {

                return (
                    <div>

                        <div className="pagea">

                            <div id="page-content" className="content" dangerouslySetInnerHTML={{
                                __html: post.content
                            }}></div>
                        </div>

                    </div>
                );
            }}

        </Query>
    )
}

export default Nav;