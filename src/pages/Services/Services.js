import React from 'react';
import Service from './Service/Service';

const Services = () => {

    const services = [
        {
            id: "1",
            img:"https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            title:"WEIGHTLIFTING",
            category: "STRENGTH",
            about: "Whether your goal is to build muscle mass or achieve a fitter, more toned body, lifting weights can help you get there.Weight training, also known as resistance or strength training, builds lean, stronger muscles, strengthens your bones and joints, and can help keep your metabolism in a healthy state — meaning you’ll burn more calories even when you’re resting",
            trainerName:"SAMANTHA GAINS",
            trainerPic: "https://ttdemo2.wpengine.com/gymx/wp-content/uploads/sites/3/2017/01/gym_coach_3-150x150.jpg",  
        },
        {
            id: "2",
            img:"https://images.unsplash.com/photo-1434754205268-ad3b5f549b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
            title:"INDOOR CYCLING",
            category: "CARDIO",
            about: "Depending on the intensity of your workout and your body weight, you can burn more than 600 calories an hour with a stationary bike workout. This makes indoor cycling an excellent workout option for burning calories quickly. Burning more calories than you consume is the key to weight loss.",
            trainerName:"SAMANTHA GAINS",
            trainerPic: "https://ttdemo2.wpengine.com/gymx/wp-content/uploads/sites/3/2017/01/gym_coach_3-150x150.jpg",  
        },
        {
            id: "3",
            img:"https://previews.123rf.com/images/rido/rido1905/rido190500058/123419423-group-of-fit-people-holding-kettle-bell-during-squatting-exercise-at-crossfit-gym-fitness-girl-and-m.jpg",
            title:"KETTLEBELL POWER",
            category: "STRNGTH",
            about: "Most kettlebell exercises make you produce power with your lower body, transfer it through your core and finish with an upper-body movement, similar to throwing, shooting, swinging or tackling. ... They can be added to your lower- or upper-body workouts, or performed as an entire workout.",
            trainerName:"SAMANTHA GAINS",
            trainerPic: "https://ttdemo2.wpengine.com/gymx/wp-content/uploads/sites/3/2017/01/gym_coach_3-150x150.jpg",  
        },
        {
            id: "4",
            img:"https://images.unsplash.com/photo-1518644961665-ed172691aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            title:"CORE POWER",
            category: "FUNCTIONAL",
            about: "Most kettlebell exercises make you produce power with your lower body, transfer it through your core and finish with an upper-body movement, similar to throwing, shooting, swinging or tackling. ... They can be added to your lower- or upper-body workouts, or performed as an entire workout.",
            trainerName:"BEN SMITH",
            trainerPic: "https://ttdemo2.wpengine.com/gymx/wp-content/uploads/sites/3/2017/01/gym_coach_1-150x150.jpg",  
        },
        {
            id: "5",
            img:"https://images.unsplash.com/photo-1522898467493-49726bf28798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            title:"MOBILITY CIRCLE",
            category: "FUNCTIONAL",
            about: "We talk about mobility in terms of degrees of freedom. This is the range of movement that you have at each joint. Whether the activity, limitations in all or any of your joints will result in lower performance and a greater risk of injury.",
            trainerName:"BEN SMITH",
            trainerPic: "https://ttdemo2.wpengine.com/gymx/wp-content/uploads/sites/3/2017/01/gym_coach_1-150x150.jpg",  
        },
        {
            id: "6",
            img:"https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            title:"BODY WORKS",
            category: "CARDIO",
            about: "We talk about mobility in terms of degrees of freedom. This is the range of movement that you have at each joint. Whether the activity, limitations in all or any of your joints will result in lower performance and a greater risk of injury.",
            trainerName:"BEN SMITH",
            trainerPic: "https://ttdemo2.wpengine.com/gymx/wp-content/uploads/sites/3/2017/01/gym_coach_1-150x150.jpg",  
        },
    ]

    return (
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {
                services.map((service) => <Service
                key={service.id}
                service={service}
                ></Service>) 
            }
        </div>
    );
};

export default Services;