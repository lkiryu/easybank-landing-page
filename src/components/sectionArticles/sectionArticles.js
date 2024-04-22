import React from "react";
import currency from '../../images/image-currency.jpg'
import restaurant from '../../images/image-restaurant.jpg'
import plane from '../../images/image-plane.jpg'
import confetti from '../../images/image-confetti.jpg'

const SectionArticles = () => {
    return (
        <section className="articles">
            <h2 className="title">Latest Articles</h2>
            <div className="articles">
                <div className="article">
                    <img src={currency} alt="currency"></img>
                    <p className="article-author">By Claire Robinson</p>
                    <h3 className="article-title">Receive money in any currency with no fees</h3>
                    <p className="article-description">The world is getting smaller and we’re becoming more mobile. So why should you be
                        forced to only receive money in a single ...</p>
                </div>
                <div className="article">
                    <img src={restaurant} alt="currency"></img>
                    <p className="article-author">By Wilson Hutton</p>
                    <h3 className="article-title">Treat yourself without worrying about money</h3>
                    <p className="article-description">Our simple budgeting feature allows you to separate out your spending and set
                        realistic limits each month. That means you ...</p>
                </div>
                <div className="article">
                    <img src={plane} alt="currency"></img>
                    <p className="article-author">By Wilson Hutton</p>
                    <h3 className="article-title">Take your Easybank card wherever you go</h3>
                    <p className="article-description">We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                        while you’re abroad. We’ll even show you ...</p>
                </div>
                <div className="article">
                    <img src={confetti} alt="currency"></img>
                    <p className="article-author">By Claire Robinson</p>
                    <h3 className="article-title">Our invite-only Beta accounts are now live!</h3>
                    <p className="article-description">After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                        It’s easy to request an invite through the site ...</p>
                </div>
            </div>
        </section>
    )
}

export default SectionArticles