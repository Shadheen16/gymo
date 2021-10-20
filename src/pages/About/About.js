import React from 'react';
import Gallery from '../../shared/Gallery/Gallery';
import Logo from '../../shared/Logo/Logo';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';
import SharedBanner from '../../shared/SharedBanner/SharedBanner';

const About = () => {
    return (
        <div className="about-us">
          <SharedBanner
          bannerText="ABOUT US"
          ></SharedBanner>
          <div className="p-5 pb-20 text-left">
                <h1 className="text-3xl my-5 font-bold">
                How We’re Different
                </h1>
                <p>
                    1) We are the experts in Online Health & Fitness Education. At Onfit we have two true loves…Online Education & the Health & Fitness Industry. We are passionate about ensuring that our courses provide the highest quality technical and practical information, optimised in the easiest and most enjoyable format for you to learn.

                    2) We deliver comprehensive support, on your terms. Our exclusive ‘Circle of Support’ program is designed to aid easy study. It allows you to receive assistance when and how you need, whether that be through a screen share session or contacting us after hours or on weekends. The bottom line is our team is dedicated to helping you succeed and we’re with you every step of the way!

                    3) We’re forward thinkers — We know you’re not looking for a short-term career, you want to feel confident that what you’re learning will equip you for the future of the health and fitness industry. Our team is constantly updating, reasearching and connecting with industry leaders, to ensure our our courses are cutting edge.

                    Quality Education + Flexibility = Onfit Training College
                    At Onfit, we have one mission… to help you build a rewarding career in the health & fitness industry.

                    It’s our time-tested, “whole package” learning system that makes this possible.

                    Here are some more reasons to choose Onfit…

                    We use a simple, user-friendly path to aid fast and enjoyable learning… Our online fitness, weight management & allied health assistance courses have been custom designed from the ground by industry professionals to ensure accurate learning presented in a fun, interesting format.
                    Receive fanatical support, guaranteed. When you choose Onfit, you get instant access to our powerful support network, extending from our Career Advisor team to our passionate team of Tutors and Admin & IT Support staff. You’ll have our team at your disposal from the word ‘go’!
                    Learn from Instructors who walk the walk… all of our Onfit tutors have worked or currently work in the field and want to share their experience with you. Not only have they been certified as trainers, but also as effective educators. They are well-equipped to help you launch a successful and rewarding career because they’ve all done it themselves.
                    Learn on your schedule… As a pioneer of online education, Onfit leads the way in offering highly flexible learning solutions. Study anywhere, anytime with our online courses. They’re compatible with all laptops and portable devices and the downloaded app allows you to study offline. Building your dream career has never been so easy.
                </p>
            </div>
          <div className="bg-black p-20 pt-10">
              <SectionHeader
          addClass="mt-20 mb-10 text-green-400"
          headerText="GALLERY"
          ></SectionHeader>
          <Gallery></Gallery>
          </div>
          
        </div>
    );
};

export default About;