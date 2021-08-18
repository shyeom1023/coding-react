import React from 'react'; 


const Home = ({history}) => {
        return(
            <div>
                Home
                28:21분까지 작업했음
                <button onClick={()=>{history.push('/posts')}}>
                    버튼
                </button>
            </div>
    );
};




export default Home;