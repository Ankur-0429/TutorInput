import React from 'react';

const Tutor = ({id, name, pic,bio}) =>{
    const [readMore, setReadMore] = React.useState(false)
    return <article className="single-tutor">
        <div className="image_container">
            <img src={pic} alt={name} />
        </div>
        <footer>
            <div>
                <h4>Hi I'm {name}</h4>
                <p>{readMore ? bio: `${bio.substring(0,200)}...`}
                    <button onClick={()=>setReadMore(!readMore)}>
                    {readMore ? 'show less': 'read more'}
                    </button>
                </p>

                <button className="btn">
                    Let's Talk
                </button>
            </div> 
        </footer>
    </article>
}

export default Tutor