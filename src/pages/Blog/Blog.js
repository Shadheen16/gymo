import React from 'react';
import SharedBanner from '../../shared/SharedBanner/SharedBanner';

const Blog = () => {
    return (
        <div className="">
            <SharedBanner
            bannerText="OUR BLOG"
            ></SharedBanner>
            <div className="p-5 text-left sm:flex">
                <div className="max-w-4xl">
                <div className="w-full py-5">
                        <img src="https://images.unsplash.com/photo-1434754205268-ad3b5f549b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" alt="" />
                    </div>
                    <h1 className="text-left text-3xl">
                        NEW CROSS FIT COURSE
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquid quod unde. Commodi assumenda corporis error nemo dignissimos officiis a labore doloribus dolor ipsa velit odit at dolorum, et rerum.
                    </p>

                    <strong className="my-5 text-green-400">
                        read more
                    </strong>
                    
                    
                </div>
                <div className="mx-auto footer-box">
                <h5>Openning Hours</h5>
                <small>
                    MON- 7.00am to 10 pm  <br />
                    TUE- 7.00am to 10 pm <br />
                    WED- 7.00am to 10 pm<br />
                    THU- 7.00am to 10 pm <br />
                    FRY- 3.00pm to 10 pm <br />
                    SAT- 7.00am to 10 pm <br />
                    SUN- 3.00pm to 10 pm
                </small>
            </div>
                <div>

                </div>
            </div>
        </div>
            );
};

            export default Blog;