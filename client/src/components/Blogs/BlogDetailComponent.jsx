import React from 'react'
import image from '../../assets/Shared/blogmain.png'
import image2 from '../../assets/Shared/blog2.png'

function BlogDetailComponent() {
    const title = 'Blog Header'
    const images = [
        {
            image: image
        },
        {
            image: image2
        },
        {
            image: image2
        }
    ]
    const content = [
        {
            text: `Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit
            litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem
           modo typi, qui nunc nobis videntur parum clari, fiant usus legentis in iis qui facit zzril
           delenit augue duis dolore te feugait nulla facilisi usus legentis in iis qui facit eorum.`
        },
        {
            text: `Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est
            etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
            notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum
            formas humanitatis per seacula quarta decima et quinta decima autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat, vel illum dolore.`
        },
        {
            text: `
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat.`
        },
        {
            text: `Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit
            litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi,
            qui nunc nobis videntur parum clari, fiant usus legentis in iis qui facit autem vel eum iriure
            dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla.`
        }
    ]
    const subcontent = `quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem
    consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus
    parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et
    quinta decima autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
    consequat, vel illum dolore.`
    const date = '20 September'
    return (
        <div className='mx-28 mt-10 flex flex-col items-center font-mont'>
            <h1 className='text-5xl font-bold mb-5 text-left w-full ml-40'>{title}</h1>
            <p className='w-full pl-20 text-xl text-gray-400'>{date}</p>
            <img src={images[0].image} alt="" className='my-10 w-[70%]' />
            <div className='my-5 flex flex-col gap-7 text-lg text-gray-500 w-[90%]'>
                {content.map((elem) => (
                    <p key={elem.text}>{elem.text}</p>
                ))}
            </div>
            <div className='flex mt-10 gap-10 justify-center'>
                <img src={images[1].image} alt="" className='w-[45%]'/>
                <img src={images[2].image} alt="" className='w-[45%]'/>
            </div>
            <p className='mt-10  text-justify w-[90%]'>{subcontent}</p>
        </div>
    )
}

export default BlogDetailComponent      