import './footer.css'
function Footer() {
    return (
        <footer className="footercontainer">
            <div className='linkswrapper'>
                <div className="projcontainer">
                    <div className='hellog'>
                        <a className='hellog' href='https://github.com/Cal-Flores/Capstone'>Fourth Quorra 2022</a>
                    </div>
                </div>
                <div className='aref'>
                    <div className='hellog'>Caleb Flores</div>
                </div>
                <div className='aref'>
                    <a className="ind-git" href="https://github.com/Cal-Flores"></a>
                    <div className='hellog'>
                        <i class="fa-brands fa-github"></i>
                    </div>
                </div>
                <div className='aref'>
                    <a className='ind-link' href='https://www.linkedin.com/in/caleb-flores-5a988a257/'></a>
                    <div className='hellog'>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
