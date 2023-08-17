import './Form.scss'
import './FormMediaQuery.scss'
import ReactWhatsapp from "react-whatsapp";

function Form() {

    return (
    <form className='Form'>
        <div className='FormDiv'>
            <h6 className='FormTitle'>Contacto</h6>
            <div className='FormSocial'>
                <div className='FormSocialMedia'>
                    <img className='FormSocialMediaImage' src='https://res.cloudinary.com/dqyirr5ik/image/upload/v1688157588/whatsap_j8yrsv.png'/>
                    <a className='FormSocialMediaTag'>+5491157455174</a>
                </div>
                <div className='FormSocialMedia'>
                    <img className='FormSocialMediaImage' src='https://res.cloudinary.com/dqyirr5ik/image/upload/v1688157797/Mail_t6zk7a.png'/>
                    <a className='FormSocialMediaTag'>alfaraeventos@gmail.com</a>
                </div>
                <div className='FormSocialMedia'>
                    <a href='https://instagram.com/alfara.eventos?igshid=MzRlODBiNWFlZA==' target='_blank'><img className='FormSocialMediaImage SocialMediaHover' src='https://res.cloudinary.com/dqyirr5ik/image/upload/v1688157796/instagram_aw7ulc.png'/></a>
                    <a target='_blank' href='https://instagram.com/alfara.eventos?igshid=MzRlODBiNWFlZA==' className='FormSocialMediaTag'>alfara.eventos</a>
                </div>
                <div className='FormSocialMedia'>
                    <a href='#' target='_blank'><img className='FormSocialMediaImage SocialMediaHover' src='https://res.cloudinary.com/dqyirr5ik/image/upload/v1688157797/tik_tok_xcmgod.png'/></a>
                    <a href='#' target='_blank' className='FormSocialMediaTag'>Tik Tok</a>
                </div>
            </div>
        </div>
    </form>
    )
}

export default Form;