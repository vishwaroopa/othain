import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import SLIDERS_QUERY from "../../queries/sliders/sliders";
const Sliders = () => {
    return (
        <Query query={SLIDERS_QUERY} id={null}>
            {({ data: { sliders } }) => {
                return (
                    <header id='header'>
                        <div className='intro'>
                            <div className='overlay'>

                                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        {sliders.map((slider, i) => {
                                            const imageUrl =
                                                process.env.NODE_ENV !== "development"
                                                    ? slider.bimage.url
                                                    : process.env.REACT_APP_BACKEND_URL + slider.bimage.url;
                                            const classname =
                                                slider.id != 1
                                                    ? "inactive"
                                                    : "active";
                                            return (
                                                <div class={`item ${classname}`}>
                                                    <img src={slider.bimage.url} alt="Mavin Infotech" class="item_sub" />
                                                    <img src="https://res.cloudinary.com/mavin-infotech/image/upload/v1629970196/home_banner_5eb28553ba.png?267531901.30000007" alt="Mavin Infotech" class="item_sub1 item_sub2" />
                                                    <div class="carousel-caption">
                                                        <div className='col-md-9'>
                                                            <h1>
                                                                {slider.title}
                                                            </h1>
                                                            <h5>{slider.subtitle}</h5>
                                                            <ReactMarkdown source={slider.description} />
                                                            <Link to={slider.url} className='btn btn-custom btn-lg page-scroll'>
                                                                Learn More
                </Link>
                                                        </div>
                                                     

                                                    </div>
                                                </div>

                                            );
                                        })}
                                    </div>


                                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                        <span class="fa fa-chevron-circle-left"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                        <span class="fa fa-chevron-circle-right"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div></div></div></header>
                );
            }}
        </Query>
    )
}

export default Sliders;
