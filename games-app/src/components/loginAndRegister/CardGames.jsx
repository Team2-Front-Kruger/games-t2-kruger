import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetch3Games } from "../../store/gameslog/gameslogSlice";

const CardGames = () => {

    
    const dispatch = useDispatch();
    const {list: games} = useSelector(state => state.gameslog);

    useEffect(() => {
        dispatch(fetch3Games());
    }, [dispatch])

    return (
        <>
        <div >
            {
                games.map((games, id) => (
                    <div key={games.id} className="card glass flex-col lg:flex-row max-w-sm mb-2">
                        <div className="card-body flex-row " >
                            <img className="card w-1/3" src= {games.background_image} alt="ea" />
                            <div>
                            <h5>{games.name}</h5>
                            <h5>
                            ⭐ {games.rating}
                            </h5>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div>
            <Link className="flex w-fit ml-5 font-bold" to='/'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
&nbsp; Descubre más</Link>
            </div>
        </div>     
        </>
     );
}
 
export default CardGames;