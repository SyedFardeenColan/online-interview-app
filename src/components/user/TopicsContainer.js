import './TopicsContainer.css';

export default function TopicsContainer(){
    return(
        <div className='topic-box'>
            <div className='topic-header'>
                <div className='topic-left'>
                    <div className='topic-title'>Interview Topics</div>
                    <span>Choose the topics below</span>
                </div>
            
            </div>
            
            <div className='topic-body'>
                <div className='topic-list'>
                    <div className='topic'>
                        <img src='https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png?f=webp' alt='Java'/>
                        <span className='topic-name'>Java Interview</span>
                    </div>

                    <div className='topic'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png' alt='Java'/>
                        <span className='topic-name'>Python Interview</span>
                    </div>

                    <div className='topic'>
                        <img src='https://cdn.iconscout.com/icon/free/png-256/free-ruby-45-1175100.png?f=webp' alt='Java'/>
                        <span className='topic-name'>Ruby Interview</span>
                    </div>
                </div>

                <div className='topic-list'>
                    <div className='topic'>
                        <img src='https://w7.pngwing.com/pngs/83/268/png-transparent-csharp-line-logo-icon.png' alt='Java'/>
                        <span className='topic-name'>C# Interview</span>
                    </div>

                    <div className='topic'>
                        <img src='https://w7.pngwing.com/pngs/566/160/png-transparent-golang-hd-logo-thumbnail.png' alt='Java'/>
                        <span className='topic-name'>Golang Interview</span>
                    </div>

                    <div className='topic'>
                        <img src='https://www.svgrepo.com/show/376337/node-js.svg' alt='Java'/>
                        <span className='topic-name'>Node.js Interview</span>
                    </div>
                </div>
            </div>
        </div>
    );
}