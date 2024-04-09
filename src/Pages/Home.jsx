export default function ALL(){
    return(
        <div className="home">
            <div>
                <h1>“Learning never exhausts the mind.”</h1>
            </div>

            <div className="cards">

            <a href="https://www.guvi.in/blog/how-to-render-an-array-of-objects-in-react/" className="card">
                <div >
                <img src="./dist/images/home1.webp" alt="Card Image"/>
                <div className="details">
                    <h3>How to Render an Array of Objects in React? [in 3 easy steps]</h3>
                    
                </div>
                </div>
            </a>

            <a href="https://www.guvi.in/blog/unique-project-ideas-for-college-students/" className="card">
                <div >
                <img src="https://www.guvi.in/blog/wp-content/uploads/2023/06/feature-image-unique-project-ideas.jpg" alt="Card Image"/>
                <div className="details">
                    <h3>Top 10 Unique Project Ideas for College Students</h3>
                    
                </div>
                </div>
            </a>

            <a href="https://www.guvi.in/blog/best-javascript-project-ideas/" className="card">
                <div >
                <img src="https://www.guvi.in/blog/wp-content/uploads/2023/02/animated-javascript-project-image.jpg" alt="Card Image" />

                <div className="details">
                    <h3>30 Best JavaScript Project Ideas For You [3 Bonus Portfolio Projects]</h3>
                    
                </div>
                </div>
            </a>

            </div>
        </div>
    )
}