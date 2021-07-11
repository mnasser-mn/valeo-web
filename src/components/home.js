
const Home = ({ history , location}) => {
    console.log(location)
    return (
        <>
            <h1 className="text-center">Home</h1>
            <button className="btn btn-dark m-2 justify-center"
                onClick={() => history.push(`/second${location.search}`)}>
                go to second page
            </button>
        </>
    )
}
export default Home;