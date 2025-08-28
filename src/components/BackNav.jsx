

function BackNav({setIsClicked}) {

    const handleBackClick = () => {
        setIsClicked(false)
    };

    return (
    <button onClick={handleBackClick}>Go Back</button>
    );
}

export default BackNav

