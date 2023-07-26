import React from 'react';
import BlogOne from './img/blog-image-1.jpg';
import BlogTwo from './img/blog-image-2.jpg'
import './index.css';


const Article = () => {
    return (
        <article>
            <section>
                <h3>11/12/20</h3>
                <h1>On the Street in Brooklyn</h1>
                <figure>
                    <img src={BlogOne} alt="BlogOne" />
                </figure>
                <main>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut facere eos asperiores hic eius dolor, 
                        at amet molestiae maiores suscipit, sed rem dolores corrupti quisquam eaque voluptas aperiam tempore atque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam non provident repudiandae quibusdam ullam, 
                        dolores sequi corrupti harum asperiores! Delectus vel totam quam voluptatum accusantium illo architecto! Atque, deleniti?
                    </p>
                    <p>Continues...</p>
                </main>
            </section>

            <section>
                <h3>11/11/20</h3>
                <h1>Vintage in Vogue</h1>
                <figure>
                    <img src={BlogTwo} alt="BlogTwo"/>
                </figure>
                <main>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut facere eos asperiores hic eius dolor, 
                        at amet molestiae maiores suscipit, sed rem dolores corrupti quisquam eaque voluptas aperiam tempore atque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam non provident repudiandae quibusdam ullam, 
                        dolores sequi corrupti harum asperiores! Delectus vel totam quam voluptatum accusantium illo architecto! Atque, deleniti?
                    </p>
                    <p>Continues...</p>
                </main>
            </section>
        </article>
    )
}

export default Article;