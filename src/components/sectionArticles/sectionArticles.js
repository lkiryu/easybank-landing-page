import React from "react";
import Article from "../article/article";

import './sectionArticles.css'

const articleData = [
    {
        src: "./images/image-currency.jpg",
        href: "/",
        title: "Receive money in any currency with no fees",
        author: "Claire Robinson",
        description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...",
    },
    {
        src: "./images/image-restaurant.jpg",
        href: "/",
        title: "Treat yourself without worrying about money",
        author: "Wilson Hutton",
        description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
    },
    {
        src: "./images/image-plane.jpg",
        href: "/",
        title: "Take your Easybank card wherever you go",
        author: "Wilson Hutton",
        description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...",
    },
    {
        src: "./images/image-confetti.jpg",
        href: "/",
        title: "Our invite-only Beta accounts are now live!",
        author: "Claire Robinson",
        description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
]

const SectionArticles = () => {
    return (
        <section className="articles-section">
            <div className="articles-content">
                <h2 className="title">Latest Articles</h2>
                <div className="articles">
                    {
                        articleData.map((item, index)=> {
                            return(
                                <Article 
                                    key={index}
                                    src={item.src}
                                    href={item.href}
                                    title={item.title}
                                    author={item.author}
                                    description={item.description}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default SectionArticles