// this is Variable Method Used to Store data in Variable Like let,const and it should be declare by using {}curely Brackets.


import Picture from '../logo.svg'
export default function Variable()
{
    let a="Erode"
    return(
        <>
            <h1>
                {a}
            </h1>
            <img src={Picture} alt='Sample images'/>
        </>
    )
}