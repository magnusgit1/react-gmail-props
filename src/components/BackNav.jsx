

function BackNav({setIsClicked}) {

    const handleBackClick = () => {
        setIsClicked(false)
    };

    return (
    <button style={{width:40, height:20}} onClick={handleBackClick}>&larr;</button>
    );
}

export default BackNav

